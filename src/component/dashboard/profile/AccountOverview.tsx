import React, { useState } from "react";
// import EditProfile from "/assets/edit-profile.png";
import Button from "@/component/form/Button";
import DatePicker from "@/component/form/DatePicker";
import countries from "@/util/constants/countries.json";

import { ThemeUtil } from "./../../../util/ThemeUtil";
import { BaseInput } from "@/component/input/BaseInput";

type StateProps = {
  code: string;
  name: string;
  subdivision: null | string;
};

const AccountOverview = () => {
  const [states, setStates] = useState<StateProps[]>([]);

  const populateStates = (selectedCountry: string) => {
    const newStates = countries.filter(
      (country) => country.name.toLowerCase() === selectedCountry
    )[0].states;

    setStates(newStates);
  };
  return (
    <div className="px-8 md:px-12 pb-28">
      <div className="pt-6 lg:pt-2 pb-6 ">
        <h2 className="text-3xl text-blackColor tracking-[1.08px] font-bold">
          Account Overview
        </h2>
      </div>

      <div className="bg-white rounded-lg  shadow-md">
        {/* Avatar Section */}
        <div className="py-6 border-b flex flex-col md:flex-row items-center justify-start gap-0 md:gap-16">
          <div className="px-8">
            <h3>Avatar</h3>
            <p className="text-lg">Edit your profile picture</p>
          </div>
          <div className="md:order-last order-first relative">
            <img
              src={ThemeUtil.icon.profile}
              alt="upload"
              className="md:w-24 cursor-pointer md:h-24 w-16 h-16"
              />
            <img
              src={ThemeUtil.icon.dark_instagram}
              alt="edit profile"
              className="w-[24px] cursor-pointer top-[40px] sm:top-[70px] right-[-5px] h-[24px] absolute"
            />
          </div>
        </div>
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Contact Info</h3>
            <p className="text-lg">Update your contact Info</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <BaseInput
              label={"Full Name"}
              placeholder="Just Answer"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <BaseInput
              label={"Email Address"}
              placeholder="besimple@design.com"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <BaseInput
              label={"Phone Number"}
              placeholder="+234 803 884 8947"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Additional Info</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <BaseInput
              label={"Select Location"}
              placeholder="Just Answer"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />

            <div className="flex justify-between max-[350px]:flex-col items-center gap-3">
              <BaseInput
                name="date_of_birth"
                placeholder="Choose date"
                label={"DOB"}
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.defaultValue = "1970-01-01";
                }}
                labelStyle={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                containerStyle={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "0",
                  width: "100%",
                  height: "auto",
                }}
                inputStyle={{
                  width: "100%",
                  borderRadius: "10px",
                  background: "rgba(232, 248, 255, 0.85)",
                }}
                labelClassName={
                  "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
                }
                inputClassName={
                  "py-[10px] w-full h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
                }
                inputContainerStyle={{
                  width: "fit-content",
                  paddingRight: 0,
                  height: "auto",
                }}
                type="date"
              />
            
              <div className="w-full m-auto py-2 space-y-2">
                <label className="font-darkerGrotesque-medium text-[17px] sm:text-[20px]">
                  <span>Sex</span>
                </label>
                <select
                  className="rounded-[15px] bg-[rgba(232,248,255,0.85)] font-medium leading-[25px] text-left text-blackColor font-darkerGrotesque-bold  h-[60px] py-3 w-full focus:border-primary focus:outline-none pl-[1rem]"
                  // className="input-control"
                  name="country"
                  defaultValue=""
                  onChange={(e) => populateStates(e.target.value)}
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Address</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <BaseInput
              label={"Home Address"}
              placeholder="Address"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <div className="w-full m-auto py-2 space-y-2 ">
              <label className="font-darkerGrotesque-medium text-[17px] sm:text-[20px]">
                <span>Country</span>
              </label>
              <select
                className="rounded-[15px] bg-[rgba(232,248,255,0.85)] font-medium leading-[25px] text-left mb-2 text-blackColor font-darkerGrotesque-bold  h-[60px] py-3 w-full focus:border-primary focus:outline-none pl-[1rem]"
                // className="input-control"
                name="country"
                defaultValue=""
                onChange={(e) => populateStates(e.target.value)}
              >
                <option disabled selected>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <React.Fragment key={index}>
                    <option value={country.name.toLowerCase()}>
                      {country.name}
                    </option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            <div className="w-full m-auto py-2 space-y-2">
              <label className="font-darkerGrotesque-medium text-[17px] sm:text-[20px]">
                <span>State</span>
              </label>
              <select
                className="rounded-[15px] bg-[rgba(232,248,255,0.85)] font-medium leading-[25px] text-left mb-2 text-blackColor font-darkerGrotesque-bold  h-[60px] py-3 w-full focus:border-primary focus:outline-none pl-[1rem]"
                // className="input-control"
                name="country"
                defaultValue=""
                onChange={(e) => populateStates(e.target.value)}
              >
                <option disabled selected>
                  Select State
                </option>
                {states?.map((state, index) => (
                  <React.Fragment key={index}>
                    <option value={state.name.toLowerCase()}>
                      {state.name}
                    </option>
                  </React.Fragment>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Social Media Contact Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:pl-8 px-4">
            <h3>Social Media Contact</h3>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <BaseInput
              label={"Facebook"}
              placeholder="Facebook.com/"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <BaseInput
              label={"Whatsapp"}
              placeholder="wa.me//+234"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <BaseInput
              label={"Instagram"}
              placeholder="instagram.com/"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
            <BaseInput
              label={"Twitter"}
              placeholder="x.com/"
              labelStyle={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                minHeight: "0",
                width: "100%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={
                "font-darkerGrotesque-medium text-[17px] sm:text-[20px]"
              }
              inputClassName={
                "py-[10px] w-[8rem] h-[60px] text-[17px] sm:text-[20px] sm:h-auto lg:w-auto px-[1px]"
              }
              inputContainerStyle={{
                width: "100%",
                paddingRight: 0,
                height: "auto",
              }}
            />
          </div>
        </div>

        <div className="flex justify-around md:justify-end py-8 lg:py-16 lg:px-24 lg:gap-12 gap-1 md:mx-3 lg:mx-1">
          <button className="btn btn-ghost text-dangerColor text-[14px] px-4 md:text-lg">
            Deactivate Account
          </button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
