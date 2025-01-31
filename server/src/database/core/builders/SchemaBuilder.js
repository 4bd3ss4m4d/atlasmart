import mongoose from "mongoose";
import { ConfigurationError } from "#core/errors/classes/ConfigurationError.js";

class MongooseSchemaBuilder {
  static #DEFAULT_OPTIONS = {
    timestamps: true,
    strict: true,
    id: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        delete ret.__v;
        return ret;
      },
    },
    toObject: { virtuals: true },
  };

  /**
   * Creates a Mongoose model from the provided configuration
   * @param {string} modelName - Name of the model (PascalCase)
   * @param {SchemaConfig} config - Schema configuration object
   * @returns {mongoose.Model} Mongoose model instance
   * @throws {ConfigurationError} If configuration is invalid
   */
  createModel(modelName, config) {
    this.#validateModelName(modelName);
    this.#validateConfigStructure(modelName, config);

    const { fields, options, hooks, methods, statics, virtuals, plugins } =
      this.#normalizeConfig(config);

    const schema = new mongoose.Schema(
      fields,
      this.#mergeOptions(options?.schemaOptions)
    );

    this.#applyPlugins(schema, plugins);
    this.#applyHooks(schema, hooks);
    this.#applyMethods(schema, methods);
    this.#applyStatics(schema, statics);
    this.#applyVirtuals(schema, virtuals);
    this.#applyIndexes(schema, options?.indexes);

    return mongoose.model(modelName, schema);
  }

  /** @private */
  #validateModelName(modelName) {
    if (typeof modelName !== "string" || !modelName.trim()) {
      throw ConfigurationError.create("modelName", { modelName });
    }
  }

  /** @private */
  #validateConfigStructure(modelName, config) {
    if (!config || typeof config !== "object" || Array.isArray(config)) {
      throw ConfigurationError.create("schemaConfig", {
        modelName,
        reason: "Schema config must be a valid object.",
      });
    }

    if (!config.fields) {
      throw ConfigurationError.create("missingFields", { modelName });
    }

    if (typeof config.fields !== "object" || Array.isArray(config.fields)) {
      throw ConfigurationError.create("invalidFields", {
        modelName,
        reason: "Fields must be an object.",
      });
    }
  }

  /** @private */
  #normalizeConfig(config) {
    return {
      fields: config.fields,
      options: config.options || {},
      hooks: config.hooks || {},
      methods: config.methods || {},
      statics: config.statics || {},
      virtuals: config.virtuals || {},
      plugins: config.plugins || [],
    };
  }

  /** @private */
  #mergeOptions(customOptions = {}) {
    return { ...MongooseSchemaBuilder.#DEFAULT_OPTIONS, ...customOptions };
  }

  /** @private */
  #applyPlugins(schema, plugins) {
    if (!Array.isArray(plugins)) return;
    plugins.forEach((plugin) =>
      Array.isArray(plugin) ? schema.plugin(...plugin) : schema.plugin(plugin)
    );
  }

  /** @private */
  #applyHooks(schema, hooks) {
    if (!hooks) return;
    ["pre", "post"].forEach((hookType) => {
      if (hooks[hookType]) {
        Object.entries(hooks[hookType]).forEach(([method, handler]) => {
          schema[hookType](method, handler);
        });
      }
    });
  }

  /** @private */
  #applyMethods(schema, methods) {
    if (methods) {
      Object.entries(methods).forEach(([name, handler]) => {
        schema.methods[name] = handler;
      });
    }
  }

  /** @private */
  #applyStatics(schema, statics) {
    if (statics) {
      Object.entries(statics).forEach(([name, handler]) => {
        schema.statics[name] = handler;
      });
    }
  }

  /** @private */
  #applyVirtuals(schema, virtuals) {
    if (virtuals) {
      Object.entries(virtuals).forEach(([name, config]) => {
        const virtual = schema.virtual(name);
        if (config.get) virtual.get(config.get);
        if (config.set) virtual.set(config.set);
      });
    }
  }

  /** @private */
  #applyIndexes(schema, indexes) {
    if (!Array.isArray(indexes)) return;
    indexes.forEach(({ fields, options = {} }) =>
      schema.index(fields, options)
    );
  }

  deleteModel(modelName) {
    if (mongoose.models[modelName]) {
      mongoose.deleteModel(modelName);
      delete mongoose.models[modelName]; // Ensure complete cache removal
      console.log(`🗑️ Model '${modelName}' deleted successfully.`);
    } else {
      console.warn(`⚠️ Model '${modelName}' not found.`);
    }
  }
}

// ✅ Export a singleton instance
export const schemaBuilder = new MongooseSchemaBuilder();
