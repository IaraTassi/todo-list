import { describe, expect, it } from "vitest";
import {
  addTodo,
  toggleTodo,
  filterTodos,
  removeTodo,
} from "../../src/uttils/todoUtils";

describe("todoUtils", () => {
  describe("todoUtils - addTodo", () => {
    it("should add a new todo item to the list", () => {
      const todos = [];

      const newTodo = addTodo(todos, {
        id: 1,
        text: "Estudar",
        priority: "high",
        completed: false,
      });

      const result = addTodo(todos, newTodo);

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(newTodo);
    });
  });

  describe("todoUtils - toggleTodo", () => {
    it("should toggle the completed status of a todo item", () => {
      const todos = [
        { id: 1, text: "Estudar", priority: "high", completed: false },
      ];

      const result = toggleTodo(todos, 1);

      expect(result[0].completed).toBe(true);
      expect(result[0].text).toBe("Estudar");
    });

    it("should not change any todo when the id does not exist", () => {
      const todos = [
        {
          id: 1,
          text: "Estudar",
          completed: false,
        },
      ];

      const result = toggleTodo(todos, 99);

      expect(result).toEqual(todos);
    });
  });

  describe("todoUtils - filterTodos", () => {
    it("should return only high priority todos", () => {
      const todos = [
        { id: 1, priority: "high" },
        { id: 2, priority: "low" },
        { id: 3, priority: "high" },
      ];

      const result = filterTodos(todos, "high");

      expect(result).toHaveLength(2);
    });

    it("should return all todos when filter is all", () => {
      const todos = [
        { id: 1, priority: "high" },
        { id: 2, priority: "low" },
      ];

      const result = filterTodos(todos, "all");

      expect(result).toHaveLength(2);
    });
  });

  describe("todoUtils - removeTodo", () => {
    it("should remove a todo when the id exists", () => {
      const todos = [
        { id: 1, text: "A" },
        { id: 2, text: "B" },
      ];

      const result = removeTodo(todos, 1);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(2);
    });

    it("should not remove any todo when the id does not exist", () => {
      const todos = [
        { id: 1, text: "A" },
        { id: 2, text: "B" },
      ];

      const result = removeTodo(todos, 99);

      expect(result).toHaveLength(2);
    });
  });
});
