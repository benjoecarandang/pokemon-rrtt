"use client";

import React, { useState } from "react";

import { pokemonTypesObject } from "../../utils/pokemonTypes";

import Search from "../../features/Pokemons/components/Search";
import { useNavigate, useParams } from "react-router-dom";

const filters = [
  {
    id: "size",
    name: "Size",
    options: [
      { value: "small", label: "Small", checked: false },
      { value: "medium", label: "Medium", checked: false },
      { value: "large", label: "Large", checked: false }
    ]
  }
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export default function SidebarFilter({
  children
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { type } = useParams();

  const [selectedType, setSelectedType] = useState<string | null>(type || null);

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-screen-xl my-6">
          <div className="flex items-baseline justify-between">
            <Search />
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <fieldset>
                  <legend className="block mb-2 font-bold text-gray-900">
                    Types
                  </legend>
                  {Object.entries(pokemonTypesObject).map(
                    ([key, value], index) => (
                      <div className="pt-2 space-y-3" key={key}>
                        <div className="flex items-center">
                          <input
                            id={`${key}`}
                            name="radioForTypes"
                            defaultValue={key}
                            type="radio"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            checked={selectedType === key}
                            onClick={() => {
                              // Handle unchecking logic
                              if (selectedType === key) {
                                setSelectedType(null); // Uncheck the radio button
                                navigate(`/pokemons`, { replace: true });
                              }
                            }}
                            onChange={() => {
                              // Handle selecting a new radio button
                              if (selectedType !== key) {
                                setSelectedType(key); // Select the radio button
                                navigate(`/type/${key}`, {
                                  replace: true
                                });
                              }
                            }}
                          />

                          <span
                            key={index}
                            style={{ backgroundColor: value.hex ?? "#555" }} // Default color if no hex
                            className="flex text-sm items-center pr-2 text-white rounded-md capitalize leading-4 ml-3"
                          >
                            <img
                              className="w-6 h-6 mr-1"
                              src={value.image}
                              alt={key}
                            />
                            {key}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </fieldset>

                <div className="divide-y divide-gray-200 space-y-6 hidden lg:block py-6">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? undefined : "pt-6"}
                    >
                      <fieldset>
                        <legend className="block mb-2 font-bold text-gray-900">
                          {section.name}
                        </legend>
                        <div className="pt-6 space-y-3">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </div>
              </form>

              {/* Pokemon grid */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
