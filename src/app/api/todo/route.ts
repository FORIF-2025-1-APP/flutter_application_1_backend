import { withAuth } from "@middleware/auth";
import { NextRequest, NextResponse } from "next/server";
import {
  createTodo,
  getTodos,
  deleteTodo,
  toggleCompleted,
  getTodoById,
} from "@lib/todo";

export const GET = withAuth(async (req: NextRequest, context: any) => {
  const { user } = context;

  try {
    const todos = await getTodos(user.id);
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: "Failed to get todos" }, { status: 500 });
  }
});

export const POST = withAuth(async (req: NextRequest, context: any) => {
  const { title } = await req.json();
  const { user } = context;

  try {
    const todo = await createTodo(title, user.id);
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
});

export const DELETE = withAuth(async (req: NextRequest, context: any) => {
  const { id } = await req.json();
  const { user } = context;

  try {
    const todo = await getTodoById(id);
    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }
    if (todo.userId !== user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    await deleteTodo(id);
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
});

export const PATCH = withAuth(async (req: NextRequest, context: any) => {
  const { id, completed } = await req.json();
  const { user } = context;

  try {
    const todo = await toggleCompleted(id, completed);
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
});
