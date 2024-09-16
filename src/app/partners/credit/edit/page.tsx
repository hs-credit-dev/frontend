"use client";

import InfoIcon from "@/app/students/pitch/InfoIcon";
import JoditEditor from "jodit-react";
import Link from "next/link";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import PartnersContext, {
  Action,
  ActionType,
  reducer,
} from "../../PartnersContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const actionButton = useRef<HTMLButtonElement>(null);
  const { credit, dispatch } = useContext(PartnersContext);
  const router = useRouter();

  const { creditName, creditDescription } = {
    creditName: "Familty Health History",
    creditDescription: `“Students conduct original research into their family health history and host an EVENT where they record related interviews for podcast segment."`,
  };
  const config = {
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    editorClassName: "textarea",
    disablePlugins: "add-new-line",
    minHeight: "none",
    minWidth: "none",
    buttons:
      "bold,italic,underline,strikethrough,ul,ol,paragraph,superscript,subscript,cut,copy,paste,selectall,copyformat,link,undo,redo,find,source",
  };
  useEffect(() => {
    dispatch &&
      dispatch({ type: ActionType.description, value: creditDescription });
  }, []);
  const handleBlur = useCallback(
    (action: Action) => {
      dispatch && dispatch(action);
      const updatedCredit = reducer(credit, action);
      console.warn(updatedCredit);
      if (
        updatedCredit.description &&
        updatedCredit.stake &&
        updatedCredit.pitch &&
        updatedCredit.mint &&
        actionButton?.current
      ) {
        actionButton.current.disabled = false;
      }
    },
    [actionButton, credit]
  );
  return (
    <div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14 flex flex-col gap-[3.3125rem]">
      <div className="flex justify-between items-center">
        <h1>{creditName}</h1>
        <div>
          <Link
            href="/partners"
            className="btn text-[0.75rem] px-[1.6875rem] py-3"
          >
            Back
          </Link>
        </div>
      </div>
      <section className="py-8 px-[0.375rem]">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.warn("hello");
            router.push("/partners/credit/edit/experts");
          }}
        >
          <fieldset className="flex flex-col gap-y-[0.8125rem]">
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-[0.125rem]">
                <label htmlFor="discipline">Credit Description</label>
                <InfoIcon message="Use this space to provide a description of this credit." />
              </div>
              <JoditEditor
                config={config}
                value={creditDescription}
                className="credit-description"
              />
            </div>
            <div className="flex flex-col gap-y-[0.625rem]">
              <div className="flex gap-x-[0.125rem]">
                <label htmlFor="discipline">Stake</label>
                <InfoIcon message="Enter through text to describe the Stake process" />
              </div>
              <JoditEditor
                config={config}
                value={credit.stake}
                onBlur={(value) =>
                  handleBlur({ type: ActionType.stake, value })
                }
                className="credit-stake"
              />
            </div>
            <div className="flex flex-col gap-y-[0.625rem] pt-[0.4375rem]">
              <div className="flex gap-x-[0.375rem]">
                <label htmlFor="discipline">Pitch</label>
                <InfoIcon message="Enter the text describing the Pitch process" />
              </div>
              <JoditEditor
                config={config}
                value={credit.pitch}
                onBlur={(value) =>
                  handleBlur({ type: ActionType.pitch, value })
                }
                className="pitch-stake"
              />
            </div>
            <div className="flex flex-col gap-y-[0.625rem] pt-[0.4375rem]">
              <div className="flex gap-x-[0.375rem]">
                <label htmlFor="discipline">Mint</label>
                <InfoIcon message="Enter the text describing the Mint process" />
              </div>
              <JoditEditor
                config={config}
                value={credit.mint}
                onBlur={(value) => handleBlur({ type: ActionType.mint, value })}
                className="credit-mint"
              />
            </div>
            <div className="flex gap-x-[1.125rem] py-5 pb-6">
              <Link
                href="/partners/rubric/edit"
                className="btn py-[0.875rem] pb-[1.125rem] px-[3.9034rem]"
              >
                Edit Rubic
              </Link>
              <button
                ref={actionButton}
                type="submit"
                className="btn py-[0.875rem] pb-[1.125rem] px-[5.195rem]"
                disabled
              >
                Next
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
