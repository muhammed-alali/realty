"use client";
import ButtonCom from "@/components/btn";
import {
  Button,
  Checkbox,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const COUNTRIES = ["Turkey (+90)", "syria (+963)", "USA (+1)"];
const CODES = ["+90", "+963", "+1"];
export default function Form() {
  const [country, setCountry] = React.useState(0);
  return (
    <>
      <form className="mt-8 mb-2">
        <div className="xs:mb-4 mb-1 grid grid-cols-12   gap-6">
          <div className="xs:col-span-12 xs:max-w-[24rem] col-span-12">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Your Name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="name"
              className="  !border-[rgb(171_199_243/80%)] "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="xs:col-span-12 col-span-6">
            <div className=" xs:max-w-[24rem] ">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Phone Number
              </Typography>
              <div className="relative flex  xs:">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      ripple={false}
                      variant="text"
                      color="blue-gray"
                      className="h-11 w-14 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-transparent px-3"
                    >
                      {CODES[country]}
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-[20rem] max-w-[18rem]">
                    {COUNTRIES.map((country, index) => {
                      return (
                        <MenuItem
                          key={country}
                          value={country}
                          onClick={() => setCountry(index)}
                        >
                          {country}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
                <Input
                  type="tel"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={12}
                  placeholder="***-***-****"
                  className=" rounded-l-none  !border-[rgb(171_199_243/80%)] placeholder:text-blue-gray-300 placeholder:opacity-100   appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0 h-11",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="xs:col-span-12 col-span-6">
            {" "}
            <div className=" xs:max-w-[24rem]">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Subject
              </Typography>
              <Input
                type="text"
                size="lg"
                placeholder="subject"
                className="  !border-[rgb(171_199_243/80%)] "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="xs:col-span-12 col-span-12">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Message
            </Typography>
            <div className=" xs:max-w-[24rem]">
              <Textarea
                placeholder="message"
                variant="outlined"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                className="h-[190px] !border-[rgb(171_199_243/80%)] "
              />
            </div>
          </div>
        </div>
        <ButtonCom title="Send" hight="3.5rem" paddingX="2.75rem" />
      </form>
    </>
  );
}
