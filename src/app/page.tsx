"use client";

import { useState } from "react";

import Dropdown from "./components/dropdown";
import Description from "@components/description";
import Caution from "@components/caution";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center text-4xl font-bold">
      <div className="w-full md:w-[1024px] flex flex-col items-center gap-4">
        <div className="w-full text-center text-2xl font-bold">
          Forif Flutter Project Sample API
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
                body="None"
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
                      message: "Profile",
                      user: {
                        id: "string",
                        username: "string",
                        password: "string",
                        createdAt: "string",
                        updatedAt: "string",
                      },
                    },
                  },
                  { code: 401, data: { error: "string" } },
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
                    message: "string",
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
                    message: "string",
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
