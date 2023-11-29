import ToggleSwitch from "@/component/button/ToggleSwitch";
import Button from "@/component/form/Button";
import BulletIcon from "@/component/icons/BulletIcon";
import { BaseInput } from "@/component/input/BaseInput";

const SecuritySetting = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center">
        <div className="w-[70%] md:w-[60%] py-2">
          <h3 className="font-bold">Two-Factor Authentication</h3>
          <p className="md:text-[18px] text-base">
            Add extra security to your account. Together with your password,
            you'll have to add a unique code
          </p>
        </div>

        <ToggleSwitch />
      </div>
      <br />
      <div className="flex justify-between items-center">
        <div className="w-[60%] py-2">
          <h3 className="font-bold">Third-party app Authentication</h3>
          <p className="md:text-[18px] text-base">
            Allow sign-in authentication from external apps like Google,
            Facebook, Twitter. This can be turned off.
          </p>
        </div>

        <div className="">
          <ToggleSwitch />
        </div>
      </div>

      {/* Changing of Password */}

      <div>
        <h3 className="border-b-[2px] py-2 mt-4">Change Password</h3>

        <div>
          <form>
            <BaseInput
              label={"New Password"}
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
                width: "70%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={"font-darkerGrotesque-medium text-[17px]"}
              inputClassName={
                "py-[10px] h-[60px] text-[20px] sm:h-auto lg:w-auto px-[3px]"
              }
              inputContainerStyle={{
                background: "rgba(232, 248, 255, 0.85)",
                width: "fit-content",
                paddingRight: "10px",
                height: "auto",
              }}
              type="password"
            />

            <BaseInput
              label={"Confirm Password"}
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
                width: "70%",
                height: "auto",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "10px",
                background: "rgba(232, 248, 255, 0.85)",
              }}
              labelClassName={"font-darkerGrotesque-medium text-[17px]"}
              inputClassName={
                "py-[10px] h-[60px] text-[20px] sm:h-auto lg:w-auto px-[3px]"
              }
              inputContainerStyle={{
                background: "rgba(232, 248, 255, 0.85)",
                width: "fit-content",
                paddingRight: "10px",
                height: "auto",
              }}
              type="password"
            />
          </form>
        </div>

        {/* Rules For Password */}
        <div className="my-3 p-5 bg-[#ebd0ffcc] rounded-[15px]">
          <h3 className="font-bold py-2">Rules for passwords</h3>
          <div className="text-grayColor_1">
            <p className="py2">
              To create a new password, you must meet the following
              requirements.
            </p>

            <div>
              <div className="grid md:grid-cols-2 gap-4 pt-5 text-sm max-w-lg">
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>Minimum 8 characters</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>At least one Number</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>At least one special Character</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>Must be different from the previous</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account */}

        <div className="flex justify-between items-center py-8">
          <div>
            <h3>Delete Account</h3>
            <p className="md:text-[16px] text-sm">
              This will delete your account. Your account will be permanently
              deleted
            </p>
          </div>
          <div>
            <button className="danger-btn px-6">Delete&nbsp;Account</button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default SecuritySetting;
