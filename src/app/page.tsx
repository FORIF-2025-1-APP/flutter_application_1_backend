"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Dropdown from "@components/dropdown";
import Description from "@components/description";
import Caution from "@components/caution";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "이 페이지를 무려 1시간이나 보고 계셨군요! 앞으로도 열심히 해주세요!"
      );
    }, 60 * 60 * 1000); // 1 hour in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-4xl font-bold">
      <div className="w-full lg:w-[1024px] p-4 flex flex-col items-center gap-4">
        <div className="w-full text-center text-2xl font-bold">
          Forif Flutter Project Sample API
        </div>
        <div className="w-full text-center text-lg font-bold">
          {message}
        </div>
        <Caution />
        <Dropdown title="/api">
          <Description
            method="GET"
            headers="None"
            body="None"
            response={[
              { code: 200, data: { message: "string" } },
              { code: 500, data: { error: "string" } },
            ]}
          />

          <Dropdown title="/auth">
            <Dropdown title="/login">
              <Description
                method="POST"
                headers="None"
                body={{
                  username: "string",
                  password: "string",
                }}
                response={[
                  {
                    code: 200,
                    data: {
                      id: "string",
                      username: "string",
                      createdAt: "string",
                      updatedAt: "string",
                      token: "string",
                    },
                  },
                  { code: 400, data: { error: "string" } },
                  { code: 500, data: { error: "string" } },
                ]}
              />
            </Dropdown>
            <Dropdown title="/register">
              <Description
                method="POST"
                headers="None"
                body={{
                  username: "string",
                  password: "string",
                }}
                response={[
                  {
                    code: 200,
                    data: {
                      id: "string",
                      username: "string",
                      createdAt: "string",
                      updatedAt: "string",
                    },
                  },
                  { code: 400, data: { error: "string" } },
                  { code: 500, data: { error: "string" } },
                ]}
              />
            </Dropdown>
          </Dropdown>

          <Dropdown title="/protected">
            <Description
              method="GET"
              headers="Authorization: Bearer Token"
              body="None"
              response={[
                { code: 200, data: { message: "string" } },
                { code: 401, data: { error: "string" } },
              ]}
            />
          </Dropdown>

          <Dropdown title="/user">
            <Dropdown title="/profile">
              <Description
                method="GET"
                headers="Authorization: Bearer Token"
                body="None"
                response={[
                  {
                    code: 200,
                    data: {
                      id: "string",
                      username: "string",
                      createdAt: "string",
                      updatedAt: "string",
                    },
                  },
                  { code: 401, data: { error: "string" } },
                  { code: 404, data: { error: "string" } },
                  { code: 500, data: { error: "string" } },
                ]}
              />
            </Dropdown>
          </Dropdown>

          <Dropdown title="/todo">
            <Description
              method="GET"
              headers="Authorization: Bearer Token"
              body="None"
              response={[
                {
                  code: 200,
                  data: [
                    {
                      id: "string",
                      title: "string",
                      completed: "boolean",
                      createdAt: "string",
                      updatedAt: "string",
                      userId: "string",
                    },
                  ],
                },
                { code: 401, data: { error: "string" } },
                { code: 500, data: { error: "string" } },
              ]}
            />
            <Description
              method="POST"
              headers="Authorization: Bearer Token"
              body={{
                title: "string",
              }}
              response={[
                {
                  code: 200,
                  data: {
                    id: "string",
                    title: "string",
                    completed: "boolean",
                    createdAt: "string",
                    updatedAt: "string",
                    userId: "string",
                  },
                },
                { code: 401, data: { error: "string" } },
                { code: 500, data: { error: "string" } },
              ]}
            />
            <Description
              method="PATCH"
              headers="Authorization: Bearer Token"
              body={{
                id: "string",
                completed: "boolean",
              }}
              response={[
                {
                  code: 200,
                  data: {
                    id: "string",
                    title: "string",
                    completed: "boolean",
                    createdAt: "string",
                    updatedAt: "string",
                    userId: "string",
                  },
                },
                { code: 401, data: { error: "string" } },
                { code: 500, data: { error: "string" } },
              ]}
            />
            <Description
              method="DELETE"
              headers="Authorization: Bearer Token"
              body={{
                id: "string",
              }}
              response={[
                {
                  code: 200,
                  data: {
                    id: "string",
                    title: "string",
                    completed: "boolean",
                    createdAt: "string",
                    updatedAt: "string",
                    userId: "string",
                  },
                },
                { code: 401, data: { error: "string" } },
                { code: 500, data: { error: "string" } },
              ]}
            />
          </Dropdown>
        </Dropdown>
      </div>
    </div>
  );
}
