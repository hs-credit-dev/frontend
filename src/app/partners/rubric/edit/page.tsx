"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

type RubricIndicator = {
  id: number | string;
  indicator: string;
  weight: number | string;
  aab: number | string;
  publish: number | string;
  nrfp: number | string;
  nrfu: number | string;
  notes: string;
};
enum ActionType {
  add = "Add",
  indicator = "Indicator",
  weight = "Weight",
  aab = "Aab",
  publish = "Publish",
  nrfp = "Nrfp",
  nrfu = "Nrfu",
  notes = "Notes",
}

type Action = {
  type: ActionType;
  id: number | string;
  value: number | string;
};

export default function Page() {
  const [rubric, setRubric] = useState<RubricIndicator[]>([]);
  const router = useRouter();
  const handleAddIndicator = useCallback(() => {
    setRubric([
      ...rubric,
      {
        id: rubric.length ? rubric.length + 1 : 1,
        indicator: "",
        weight: "",
        aab: "",
        publish: "",
        nrfp: "",
        nrfu: "",
        notes: "",
      },
    ]);
  }, [rubric]);
  const handleInputChange = useCallback(
    (action: Action) => {
      const { type, value, id } = action;
      switch (type) {
        case ActionType.indicator:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, indicator: value as string } : item
            ),
          ]);
          break;
        case ActionType.weight:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, weight: value as string } : item
            ),
          ]);
          break;
        case ActionType.aab:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, aab: value as string } : item
            ),
          ]);
          break;
        case ActionType.publish:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, publish: value as string } : item
            ),
          ]);
          break;
        case ActionType.nrfp:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, nrfp: value as string } : item
            ),
          ]);
          break;
        case ActionType.nrfu:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, nrfu: value as string } : item
            ),
          ]);
          break;
        case ActionType.notes:
          setRubric([
            ...rubric.map((item) =>
              item.id === id ? { ...item, notes: value as string } : item
            ),
          ]);
          break;
      }
    },
    [rubric]
  );
  const handleClose = useCallback(
    (id: number | string) => {
      setRubric(rubric.filter((item) => item.id !== id));
    },
    [rubric]
  );
  return (
    <div className="py-12 pt-[3.125rem] px-[4.125rem] flex flex-col gap-y-[4.5rem]">
      <div className="flex pl-[0.1875rem] w-full">
        <h1>Rubric</h1>
      </div>
      <section className="w-full flex flex-col items-center gap-y-[2.875rem]">
        <div className="flex flex-col items-center gap-y-[1.0625rem]">
          <h2 className="text-[1.5rem] font-bold">Add Indicator</h2>
          <button type="button" onClick={handleAddIndicator}>
            <Image src="/add-icon.png" width={25} height={25} alt="Add icon" />
          </button>
        </div>
        <form className="max-w-[77.6875rem] w-full">
          <fieldset className="flex flex-col w-full gap-y-[4.625rem]">
            <div className="flex w-full">
              <table className="w-[95.65567%] border-solid border-2 border-black border-collapse">
                <thead className="text-[0.875rem]">
                  <tr className="h-auto flex gap-x-4 px-[1.0625rem] pr-[0.875rem] [&_th]:w-[14.2%] [&_th]:py-4">
                    <th>Indicator</th>
                    <th>Weight</th>
                    <th>ABB: Score 2</th>
                    <th>Publish: Score 1</th>
                    <th>NRFP: Score 0</th>
                    <th>NRFU: Score -1</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                {(rubric?.length && (
                  <tbody>
                    {rubric.map(
                      ({
                        id,
                        indicator,
                        weight,
                        aab,
                        publish,
                        nrfp,
                        nrfu,
                        notes,
                      }) => {
                        return (
                          <tr
                            key={id}
                            className="h-auto flex gap-x-4 px-[1.0625rem] pr-[0.875rem] [&_input]:p-0 [&_td]:py-4 [&_input]:placeholder:text-left [&_input]:text-center odd:bg-[#F6F4FA] even:bg-[#EEE]"
                          >
                            <td>
                              <input
                                type="text"
                                value={indicator}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.indicator,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={weight}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.weight,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={aab}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.aab,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={publish}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.publish,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={nrfp}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.nrfp,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={nrfu}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.nrfu,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={notes}
                                placeholder="Add ..."
                                onChange={(evt) =>
                                  handleInputChange({
                                    type: ActionType.notes,
                                    value: evt.target.value,
                                    id,
                                  })
                                }
                              />
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                )) ||
                  ""}
              </table>
              <div className="flex flex-col pl-6 justify-end py-[0.125rem]">
                {(rubric.length &&
                  rubric.map(({ id }) => (
                    <button
                      type="button"
                      key={id}
                      className="flex pt-[0.625rem] pb-[0.5625rem]"
                      onClick={() => handleClose(id)}
                    >
                      <Image
                        src="/close-icon.png"
                        width={30}
                        height={30}
                        alt="Remove"
                        className="block max-w-none"
                      />
                    </button>
                  ))) ||
                  ""}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  type="button"
                  className="btn py-4 px-[4.6153rem]"
                  onClick={() => router.push("/partners/credit/edit")}
                >
                  Submit
                </button>
              </div>
              <div className="flex text-[0.875rem] gap-x-[7.1rem]">
                <div className="flex flex-col gap-y-[0.875rem]">
                  <strong>Term Key</strong>
                  <div className="flex flex-col">
                    <div className="flex gap-x-1">
                      <strong>Indicator:</strong>
                      <span>XYZ XYZ</span>
                    </div>
                    <div className="flex gap-x-1">
                      <strong>Weight:</strong>
                      <span>XYZ XYZ</span>
                    </div>
                    <div className="flex gap-x-1">
                      <strong>Notes:</strong>
                      <span>XYZ XYZ</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[0.875rem]">
                  <strong>Scoring Key</strong>
                  <div className="flex flex-col">
                    <div className="flex gap-x-1">
                      <strong>AAB:</strong>
                      <span>Above and Beyond</span>
                    </div>
                    <div className="flex gap-x-1">
                      <strong>Publish:</strong>
                      <span>Ready for Publish</span>
                    </div>
                    <div className="flex gap-x-1">
                      <strong>NRFP:</strong>
                      <span>Not Ready for Publish</span>
                    </div>
                    <div className="flex gap-x-1">
                      <strong>NRFU:</strong>
                      <span>Not Ready for Upload</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
