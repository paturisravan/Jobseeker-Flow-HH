import React, { ReactElement, FC, useEffect } from "react";
import { TextField } from "@mui/material";
import "../../App.css";
import { InlineInputModal } from "../../pages/JobSeekerProfileFlow/JobSeekerProfileFlowConstants";

const InlineInputs: FC<any> = (props): ReactElement => {
  return (
    <div>
      {props.InlineInputTitle ? (
        <div className="experience-card-title">
          <div>
            <p>
              {props.InlineInputTitle} <span className="asterisk-span"> *</span>
            </p>
          </div>
        </div>
      ) : null}
      <div className="inline-div">
        {props.InlineInputsArray.map(
          (input: InlineInputModal, index: number) => (
            <React.Fragment key={input.label}>
              <div className="number-input-field">
                <TextField
                  disabled={props.disabled}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (input.type === "number") {
                      if (Number(e.target.value) > Number(input.max)) return "";
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, Number(input.max?.toString().length) || 2);
                    }
                  }}
                  onChange={(e) =>
                    props.setValues(e.target.value.toString(), index)
                  }
                  InputProps={{
                    inputProps:
                      input.type === "number"
                        ? {
                            max: input?.max,
                            min: 0,
                          }
                        : {
                            maxLength: input?.maxLength,
                          },
                  }}
                  size="small"
                />
              </div>
              <div className="input-align">
                <span>{input.label}</span>
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default InlineInputs;
