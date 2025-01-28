import express from "express";

export default function parserMiddleware() {
  return [
    express.json({ limit: "10mb" }),
    express.urlencoded({ extended: true, limit: "10mb" }),
  ];
}
