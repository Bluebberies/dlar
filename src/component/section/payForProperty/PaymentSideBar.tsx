import { BaseButton } from "@/component/button/BaseButton";
import { SectionTitleHeader } from "@/component/header/SectionTitleHeader";
import { BaseInput } from "@/component/input/BaseInput";
import { OtpInput } from "@/component/input/OtpInput";
import { ThemeUtil } from "@/util/ThemeUtil";
import PaymentPropertyImages from "./PaymentPropertyImages";

type tabNumPropTypes = {
  handlePaymentType: Function;
  setOtp: Function;
  propertyData: any;
  tabNum: number;
  otp: string;
  paymentType: string;
};

const PaymentSideBar = ({
  handlePaymentType,
  setOtp,
  otp,
  propertyData,
  tabNum,
  paymentType,
}: tabNumPropTypes) => {
  return (
    <div className={"w-full h-full flex flex-col items-start gap-[15px]"}>
      <div className="flex flex-row items-start justify-between w-full ">
        <PaymentPropertyImages propertyData={propertyData}/>
        {/* pay with */}
        {tabNum == 1 && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                backgroundColor: "#111110",
                padding: "10px 30px",
                color: "#FAFAFA",
                fontSize: "28px",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Pay With"}
            />
            <h2 className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              My Dwelar Account
            </h2>
            <div
              className={
                "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-5 mb-5 flex items-center pl-2"
              }
            >
              <p
                className={
                  "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                }
              >
                <span
                  className={"font-darkerGrotesque-medium text-grayColor_1"}
                >
                  Available balance
                </span>
                ₦300,000
              </p>
            </div>
            <BaseButton
              title={"Proceed to payment"}
              onClick={() => handlePaymentType(2, "wallet")}
              style={{
                background: ThemeUtil.color.blackColor,
                color: "white",
                fontFamily: "darkerGrotesque-bold, sans-serif",
                fontSize: 20,
              }}
              containerStyle={{
                marginTop: 20,
                marginBottom: 20,
                width: "100%",
                borderRadius: "15px",
              }}
            />

            <h3 className="text-[20px] text-center md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Or pay via
            </h3>

            <div className="grid grid-cols-2 gap-[10px]">
              <BaseButton
                onClick={() => handlePaymentType(2, "card")}
                title={"Debit Card"}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "#F6F6F6",
                }}
                containerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <BaseButton
                onClick={() => handlePaymentType(2, "bank")}
                title={"Bank"}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "#F6F6F6",
                }}
                containerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <BaseButton
                onClick={() => handlePaymentType(2, "usd")}
                title={"Tether USDT"}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "#F6F6F6",
                }}
                containerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: "100%",
                  borderRadius: "0",
                }}
              />
            </div>
          </div>
        )}

        {/* payment complete */}
        {tabNum == 4 && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                backgroundColor: "#111110",
                padding: "10px 30px",
                color: "#FAFAFA",
                fontSize: "28px",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Payment Complete"}
            />
            <div
              className={
                "w-full mt-5 mb-5 flex flex-col justify-center items-center pl-2"
              }
            >
              <img src={ThemeUtil.icon.successful_tick_icon} alt="" />
              <h5 className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
                You have successfully paid for Property:
              </h5>
            </div>
            <BaseButton
              title={"Forward receipt to agent"}
              style={{
                background: ThemeUtil.color.blackColor,
                color: "white",
                fontFamily: "darkerGrotesque-bold, sans-serif",
                fontSize: 20,
              }}
              containerStyle={{
                marginTop: 20,
                marginBottom: 20,
                width: "100%",
                borderRadius: "15px",
              }}
            />
            <BaseButton
              onClick={() => handlePaymentType(1, "none")}
              title={"Finish"}
              style={{
                fontFamily: "darkerGrotesque-bold, sans-serif",
                fontSize: 20,
              }}
              buttonStyle={{
                color: "#111110",
                backgroundColor: "transparent",
              }}
              containerStyle={{
                marginTop: 20,
                marginBottom: 20,
                width: "100%",
                borderRadius: "15px",
              }}
            />
          </div>
        )}

        {/* payment invoice */}
        {tabNum == 2 && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                backgroundColor: "#111110",
                padding: "10px 30px",
                color: "#FAFAFA",
                fontSize: "28px",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Payment Invoice"}
            />
            <h2
              //   id="wallet"
              className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold"
            >
              Property details
            </h2>
            <div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Name
                  </span>
                  My Odessy lodge
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Location
                  </span>
                  Ifite Awka
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Price
                  </span>
                  ₦300,000
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    VAT
                  </span>
                  ₦2000
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Total
                  </span>
                  ₦300,000
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Pay Via
                  </span>
                  My Dwelar account
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2 rounded-[12px]"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Recipient
                  </span>
                  Anthony Kelvin
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-1 mb-3 flex items-center pl-2"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Available balance
                  </span>
                  ₦300,000
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <dialog
                id="wallet"
                className="modal mt-4 rounded-[10px]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "800px",
                  // padding: "40px 0"
                }}
              >
                <div className=" w-[700px] overflow-auto px-[50px] flex flex-col items-center justify-center gap-[25px] bg-[#fff] rounded-[15px] py-[30px]">
                  <div className="flex flex-col py-[19px] items-center justify-center bg-[#E8F8FF] rounded-[10px] gap-[16px] w-full">
                    <p className="font-bold text-[20px] leading-[25px] font-darkerGrotesque-bold text-[#606060]">
                      Send
                    </p>
                    <h3 className="font-bold text-[48px] leading-[34px] font-darkerGrotesque-black text-[#111110]">
                      ₦240,000.00
                    </h3>
                    <p className="font-bold text-[24px] leading-[25px] font-darkerGrotesque-black text-[#111110]">
                      <span className="font-bold text-[24px] leading-[25px] font-darkerGrotesque-bold text-[#606060]">
                        to
                      </span>{" "}
                      Mgborogwu Godswill
                    </p>
                  </div>

                  <div className="flex flex-row justify-between w-full py-[15px] px-[18px] bg-[#FAFAFA] rounded-[12px]">
                    <div className="flex flex-col items-start gap-2">
                      <p className="font-bold text-[20px] leading-[20px] font-darkerGrotesque-semiBold text-[#606060]">
                        Type of transaction
                      </p>
                      <h3 className="font-bold text-[24px] leading-[20px] font-darkerGrotesque-bold text-[#111110]">
                        Transfer
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="font-bold text-[20px] leading-[20px] font-darkerGrotesque-semiBold text-[#606060]">
                        From
                      </p>
                      <h3 className="font-bold text-[24px] leading-[20px] font-darkerGrotesque-bold text-[#111110]">
                        My Dwelar wallet
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between w-full py-[15px] px-[18px] bg-[#FAFAFA] rounded-[12px]">
                    <div className="flex flex-col items-start gap-2">
                      <p className="font-bold text-[20px] leading-[20px] font-darkerGrotesque-semiBold text-[#606060]">
                        Transfer Fee
                      </p>
                      <h3 className="font-bold text-[24px] leading-[20px] font-darkerGrotesque-bold text-[#111110]">
                        0.00
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="font-bold text-[20px] leading-[20px] font-darkerGrotesque-semiBold text-[#606060]">
                        Description
                      </p>
                      <h3 className="font-bold text-[24px] leading-[20px] font-darkerGrotesque-bold text-[#111110]">
                        Allowee
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-[24px] mt-[24px] w-full flex justify-center items-center m-auto leading-[25px] text-[#111110] font-darkerGrotesque-bold">
                    Input your Pin
                  </h3>
                  <OtpInput
                    onChangeText={setOtp}
                    otp={otp}
                    containerStyle={{
                      gap: "0",
                    }}
                    inputStyle={{
                      border: "none",
                      outline: "none",
                      borderBottom: "2px solid #606060",
                    }}
                  />
                  <BaseButton
                    onClick={() => handlePaymentType(4, "none")}
                    title={"Withdraw"}
                    style={{
                      background: ThemeUtil.color.blackColor,
                      color: "white",
                      fontFamily: "darkerGrotesque-bold, sans-serif",
                      fontSize: 20,
                    }}
                    buttonStyle={{
                      margin: 0,
                    }}
                    containerStyle={{
                      marginTop: 20,
                      width: "40%",
                      borderRadius: "15px",
                      margin: 0,
                    }}
                  />
                  <form
                    method="dialog"
                    style={{
                      width: "25%",
                      display: "flex",
                      flexDirection: "row",
                      //   justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <BaseButton
                      title={"Back"}
                      hoverOpacity={1}
                      hoverScale={1}
                      style={{
                        fontFamily: "darkerGrotesque-bold, sans-serif",
                        fontSize: 20,
                      }}
                      buttonStyle={{
                        color: "#111110",
                        backgroundColor: "transparent",
                        marginRight: "auto",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      containerStyle={{
                        width: "100%",
                        borderRadius: "15px",
                        margin: 0,
                      }}
                    />
                  </form>
                </div>
              </dialog>

              <BaseButton
                onClick={() => {
                  if (paymentType == "wallet") {
                    document.getElementById("wallet").showModal();
                  } else {
                    handlePaymentType(3, paymentType);
                  }
                }}
                title={"Pay Now"}
                style={{
                  background: ThemeUtil.color.blackColor,
                  color: "white",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontSize: 20,
                }}
                containerStyle={{
                  marginTop: 20,
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
              <BaseButton
                onClick={() => handlePaymentType(1, "none")}
                title={"Cancel"}
                style={{
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontSize: 20,
                }}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "transparent",
                }}
                containerStyle={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>
        )}

        {/* Bank Payment */}
        {tabNum == 3 && paymentType == "bank" && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                padding: "10px 30px",
                color: "#FAFAFA",
                fontSize: "28px",
                backgroundColor: "#18ACE8",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Pay With"}
            />
            <h2 className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Bank Transfer
            </h2>
            <div>
              <div
                className={
                  "w-full px-[20px] justify-center h-[60px] rounded-[12px] bg-[rgba(255,246,164,0.50)] mt-5 flex items-center"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-semiBold text-center text-[14px] text-grayColor_1 leading-[20px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  Make a single transfer from your bank to this account before
                  it expires.
                </p>
              </div>
              <div
                className={
                  "w-full rounded-[12px] p-[10px] h-[150px] bg-[#EBD0FF] mt-5 mb-5 flex flex-col justify-center gap-[16px] items-center pl-2"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-semiBold text-[20px] text-grayColor_1 leading-[20px] px-5 rounded-[12px] flex flex-row"
                  }
                >
                  Wema Bank
                </p>
                <p
                  className={
                    "font-darkerGrotesque-semiBold text-[20px] text-[#111110] leading-[20px] px-5 rounded-[12px] flex items-center flex-row gap-[10px]"
                  }
                >
                  7590762762 <img src={ThemeUtil.icon.copyFileIcon} alt="" />
                </p>
                <p
                  className={
                    "font-darkerGrotesque-semiBold text-[10px] text-grayColor_1 leading-[20px] px-5 rounded-[12px] flex flex-row "
                  }
                >
                  MYO-DW23
                </p>
              </div>
              <div
                className={
                  "w-full p-[10px] h-[60px] bg-[#E8F8FF] mt-5 mb-5 flex items-center pl-2"
                }
              >
                <p
                  className={
                    "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px] px-5 rounded-[12px] flex flex-row gap-[40px]"
                  }
                >
                  <span
                    className={"font-darkerGrotesque-medium text-grayColor_1"}
                  >
                    Total
                  </span>
                  ₦242,000
                </p>
              </div>
              <div
                className={
                  "w-full px-[20px] justify-center h-[90px] rounded-[12px] bg-[rgba(255,246,164,0.50)] mt-5 flex items-center"
                }
              >
                <p
                  className={
                    "text-[16px] text-center font-darkerGrotesque-bold  text-blackColor leading-[20px] px-5 rounded-[12px] flex flex-row items-start justify-start"
                  }
                >
                  <img src={ThemeUtil.icon.alarm_icon} alt="" /> This Account
                  expires in 30 minutes.
                  <br />
                  Do not save or reuse this account number
                </p>
              </div>

              <h3 className="text-[16px] mt-[20px] w-full flex justify-center items-center m-auto leading-[20px] text-[#606060] font-darkerGrotesque-semiBold">
                Agent will be notified when we confirm your transaction
              </h3>

              <BaseButton
                onClick={() => handlePaymentType(1, "none")}
                title={"Cancel"}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "inherit",
                }}
                containerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: "100%",
                  borderRadius: "0",
                }}
              />
            </div>
          </div>
        )}

        {/* Digital currency Payment */}
        {tabNum == 3 && paymentType == "usd" && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                padding: "10px 30px",
                color: "#FAFAFA",
                fontSize: "28px",
                backgroundColor: "#18ACE8",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Pay With"}
            />
            <h2 className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Digital Currency
            </h2>

            <div className="w-full m-auto py-2 space-y-2">
              <label className="font-darkerGrotesque-medium text-[#232323] text-[20px] leading-[20px]">
                <span>Coin</span>
              </label>
              <div
                className="flex flex-row"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #E8F8FF",
                  background: "#FFF",
                  display: "flex",
                  width: "430px",
                  height: "72px",
                  padding: "8px 20px",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <img src={ThemeUtil.icon.usd_icon} alt="" />
                <p>USDT</p>
              </div>
            </div>

            <BaseInput
              containerStyle={{
                width: "100%",
                padding: "0px",
                marginTop: 20,
                //   display: "flex",
                minHeight: "0",
                marginBottom: 0,
              }}
              placeholder="ERC-20"
              labelStyle={{
                color: "#232323",
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
              }}
              inputContainerStyle={{
                border: "1px solid #E8F8FF",
                backgroundColor: "transparent",
                width: "100%",
              }}
              inputStyle={{
                width: "100%",
                backgroundColor: "inherit",
              }}
              label="Network"
            />

            <BaseInput
              superText={`Copy <img src='${ThemeUtil.icon.file_copy_blue}' alt="copy" />`}
              superTextPosition="right"
              superTextStyles={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "inherit",
                borderRadius: "14px",
                fontFamily: "darkerGrotesque-bold, sans-serif",
                padding: "17px 13px",
                cursor: "pointer",
                width: "auto",
                border: "none",
                color: "#516AE4",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
              placeholder={"1NAp6nERqHxVbBpkHBdVN4N42GPXMFgahY"}
              containerStyle={{
                marginTop: 20,
                minHeight: "0",
                marginBottom: 0,
                width: "100%",
              }}
              inputStyle={{
                backgroundColor: "inherit",
                borderRadius: "15px",
                paddingLeft: "0px",
                padding: "20px",
              }}
              inputContainerStyle={{
                backgroundColor: "#E8F8FF",
                paddingRight: 0,
                flexDirection: "row-reverse",
              }}
              labelStyle={{
                color: "#232323",
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
              }}
              label="Wallet Address"
            />

            <h3 className="text-[20px] mt-[20px] w-full flex justify-center items-center m-auto leading-[32px] text-[#4A4A4A] font-darkerGrotesque-semiBold">
              Or Scan to proceed
            </h3>

            <div className="w-full flex flex-row items-start justify-start gap-[30px] mt-[26px]">
              <img src={ThemeUtil.image.qr_code} alt="" />
              <div>
                <ul
                  className={
                    "font-darkerGrotesque-semiBold text-[16px] leading-[16px] gap-[10px] text-[#4A4A4A]"
                  }
                >
                  <li className="w-[200px]">
                    Send only <span className="text-[#26A17B]">USDT</span> to
                    this address. Ensure the network is
                    <span className="text-[#516AE4]">ERC-20</span> .
                  </li>
                  <li className="mt-2">Minimum Deposit</li>
                  <li className="mt-2">0.00000001 USDTr</li>
                  <li className="mt-2">Expected arrival & unlock</li>
                  <li className="mt-2">15 Network Confirmations</li>
                </ul>
              </div>
            </div>

            <BaseButton
              onClick={() => handlePaymentType(1, "none")}
              title={"Cancel"}
              buttonStyle={{
                color: "#111110",
                backgroundColor: "inherit",
              }}
              containerStyle={{
                marginTop: 20,
                marginBottom: 20,
                width: "100%",
                borderRadius: "0",
              }}
            />
          </div>
        )}

        {/* Card Payment */}
        {tabNum == 3 && paymentType == "card" && (
          <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
            <SectionTitleHeader
              headerStyle={{
                padding: "10px 30px",
                color: "#fff",
                fontSize: "28px",
                backgroundColor: "#111110",
              }}
              containerStyle={{
                width: "100%",
                height: "80px",
              }}
              title={"Pay With"}
            />
            <h2 className="text-[20px] md:text-[24px] mt-4 [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Debit Card
            </h2>
            <BaseInput
              superText={`<img src='${ThemeUtil.icon.mastercard}' alt="copy" />`}
              superTextStyles={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "inherit",
                border: "none",
              }}
              label={"Card number"}
              labelStyle={{ fontSize: "20px" }}
              superTextPosition="left"
              inputStyle={{
                backgroundColor: "inherit",
                borderRadius: "15px",
                padding: "20px 0",
                paddingRight: "5px",
              }}
              placeholder={"2234 - 3346 - 8904 - 3219"}
              inputContainerStyle={{
                border: "1px solid #E8F8FF",
                backgroundColor: "transparent",
                paddingRight: 0,
              }}
            />
            <BaseInput
              containerStyle={{
                width: "100%",
                padding: "0px",
                marginTop: 20,
                //   display: "flex",
                minHeight: "0",
                marginBottom: 0,
              }}
              placeholder="John Doe"
              labelStyle={{
                color: "#232323",
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
              }}
              inputContainerStyle={{
                border: "1px solid #E8F8FF",
                backgroundColor: "transparent",
                width: "100%",
              }}
              inputStyle={{
                width: "100%",
                backgroundColor: "inherit",
              }}
              showValidTick={true}
              label="Name on card"
            />
            <div className="mt-3 flex flex-row items-center gap-[30px]">
              <div>
                <h3>Expiration</h3>
                <div className="flex flex-row gap-3 items-center">
                  <BaseInput
                    containerStyle={{
                      width: "80px",
                      padding: "0px",
                      minHeight: "0",
                      marginBottom: 0,
                      marginTop: 0,
                    }}
                    placeholder="03"
                    inputContainerStyle={{
                      border: "1px solid #E8F8FF",
                      height: "72px",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                    inputStyle={{
                      width: "100%",
                      backgroundColor: "inherit",
                    }}
                    maxLength={2}
                  />
                  <img src={ThemeUtil.icon.slash} alt="" />
                  <BaseInput
                    containerStyle={{
                      width: "80px",
                      padding: "0px",
                      minHeight: "0",
                      marginBottom: 0,
                      marginTop: 0,
                    }}
                    placeholder="24"
                    inputContainerStyle={{
                      border: "1px solid #E8F8FF",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                    inputStyle={{
                      height: "72px",
                      width: "100%",
                      backgroundColor: "inherit",
                    }}
                    maxLength={2}
                  />
                </div>
              </div>
              <BaseInput
                containerStyle={{
                  width: "100%",
                  padding: "0px",
                  marginTop: 0,
                  //   display: "flex",
                  minHeight: "0",
                  marginBottom: 0,
                }}
                placeholder="John Doe"
                labelStyle={{
                  color: "#232323",
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "15px",
                }}
                inputContainerStyle={{
                  border: "1px solid #E8F8FF",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
                inputStyle={{
                  width: "100%",
                  backgroundColor: "inherit",
                }}
                label={`CVV<img src=${ThemeUtil.icon.questionIconTransparent} />`}
              />
            </div>
            <div className="flex flex-col items-center">
              <dialog
                id="card"
                className="modal mt-4 rounded-[10px] hidden"
                style={{
                  //   display: "flex",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "90%",
                  // padding: "40px 0"
                }}
              >
                <div className="[@media(max-width:1200px)]:w-[70%] [@media(max-width:900px)]:w-[90%]  w-[50%] overflow-auto px-[105px] flex flex-col items-center justify-center gap-[25px] bg-[#fff] rounded-[15px] py-[40px] pt-40">
                  <h3 className="font-bold text-[30px] font-darkerGrotesque-bold text-[#212121]">
                    Payment Details
                  </h3>
                  <div className="flex flex-col w-full gap-[25px]">
                    <div className="flex flex-row w-full gap-[220px] items-center">
                      <h3 className="text-[24px] font-darkerGrotesque-bold text-[#212121]">
                        Property
                      </h3>
                      <p className="text-[20px] font-darkerGrotesque-regular text-[#212121]">
                        My Odessy Lodge
                      </p>
                    </div>
                    <div className="flex flex-row w-full gap-[220px] items-center">
                      <h3 className="text-[24px] font-darkerGrotesque-bold text-[#212121]">
                        Total Price
                      </h3>
                      <p className="text-[20px] font-darkerGrotesque-regular text-[#212121]">
                        ₦242,000
                      </p>
                    </div>
                    <div className="flex flex-row w-full gap-[220px] items-center">
                      <h3 className="text-[24px] font-darkerGrotesque-bold text-[#212121]">
                        Recipient
                      </h3>
                      <p className="text-[20px] font-darkerGrotesque-regular text-[#212121]">
                        Anthony Kelvin
                      </p>
                    </div>
                    <div className="flex flex-row w-full gap-[20px] items-center justify-between">
                      <h3 className="text-[24px] font-darkerGrotesque-bold text-[#212121]">
                        Payment Method
                      </h3>
                      <p className="text-[20px] bg-[#E8F8FF] rounded-[10px] font-darkerGrotesque-regular text-[#212121] w-[340px] py-[18px] px-[30px] flex items-center justify-start gap-5">
                        <img src={ThemeUtil.icon.debit_card} alt="" />
                        Debit Card
                      </p>
                    </div>
                    <BaseInput
                      superText={`<img src='${ThemeUtil.icon.mastercard}' alt="copy" />`}
                      superTextStyles={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "inherit",
                        border: "none",
                      }}
                      label={"Card number"}
                      readOnly={true}
                      value={"2234 - 3346 - 8904 - 3219"}
                      labelStyle={{ fontSize: "20px" }}
                      superTextPosition="left"
                      inputStyle={{
                        backgroundColor: "inherit",
                        borderRadius: "15px",
                        padding: "20px 0",
                        paddingRight: "5px",
                      }}
                      containerStyle={{
                        margin: 0,
                      }}
                      placeholder={"2234 - 3346 - 8904 - 3219"}
                      inputContainerStyle={{
                        border: "1px solid #E8F8FF",
                        backgroundColor: "#E8F8FF",
                        paddingRight: 0,
                      }}
                    />

                    <BaseInput
                      containerStyle={{
                        width: "100%",
                        padding: "0px",
                        marginTop: 0,
                        //   display: "flex",
                        minHeight: "0",
                        marginBottom: 0,
                      }}
                      placeholder="John Doe"
                      readOnly={true}
                      value={"John Doe"}
                      labelStyle={{
                        color: "#232323",
                        fontSize: "20px",
                        lineHeight: "20px",
                        fontWeight: 500,
                      }}
                      inputContainerStyle={{
                        border: "1px solid #E8F8FF",
                        backgroundColor: "#E8F8FF",
                        width: "100%",
                      }}
                      inputStyle={{
                        width: "100%",
                        backgroundColor: "inherit",
                      }}
                      label="Name on card"
                    />

                    <div className="flex flex-row items-center gap-[30px]">
                      <div>
                        <h3>Expiration</h3>
                        <div className="flex flex-row gap-3 items-center">
                          <BaseInput
                            containerStyle={{
                              width: "80px",
                              padding: "0px",
                              minHeight: "0",
                              marginBottom: 0,
                              marginTop: 0,
                            }}
                            placeholder="03"
                            readOnly={true}
                            value={"03"}
                            inputContainerStyle={{
                              border: "1px solid #E8F8FF",
                              height: "72px",
                              backgroundColor: "#E8F8FF",
                              width: "100%",
                            }}
                            inputStyle={{
                              width: "100%",
                              backgroundColor: "inherit",
                            }}
                            maxLength={2}
                          />
                          <img src={ThemeUtil.icon.slash} alt="" />
                          <BaseInput
                            containerStyle={{
                              width: "80px",
                              padding: "0px",
                              minHeight: "0",
                              marginBottom: 0,
                              marginTop: 0,
                            }}
                            placeholder="24"
                            readOnly={true}
                            value={"24"}
                            inputContainerStyle={{
                              border: "1px solid #E8F8FF",
                              backgroundColor: "#E8F8FF",
                              width: "100%",
                            }}
                            inputStyle={{
                              height: "72px",
                              width: "100%",
                              backgroundColor: "inherit",
                            }}
                            maxLength={2}
                          />
                        </div>
                      </div>
                      <BaseInput
                        containerStyle={{
                          width: "100%",
                          padding: "0px",
                          marginTop: 0,
                          //   display: "flex",
                          minHeight: "0",
                          marginBottom: 0,
                        }}
                        placeholder="John Doe"
                        labelStyle={{
                          color: "#232323",
                          fontSize: "20px",
                          lineHeight: "20px",
                          fontWeight: 500,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "15px",
                        }}
                        readOnly={true}
                        value={"123"}
                        inputContainerStyle={{
                          border: "1px solid #E8F8FF",
                          backgroundColor: "#E8F8FF",
                          width: "100%",
                        }}
                        inputStyle={{
                          width: "100%",
                          backgroundColor: "inherit",
                        }}
                        label={`CVV<img src=${ThemeUtil.icon.questionIconTransparent} />`}
                      />
                    </div>

                    <div className="flex flex-row items-center justify-between w-full">
                      <form
                        method="dialog"
                        style={{
                          width: "25%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <BaseButton
                          title={"Back"}
                          hoverOpacity={1}
                          hoverScale={1}
                          style={{
                            fontFamily: "darkerGrotesque-bold, sans-serif",
                            fontSize: 20,
                          }}
                          buttonStyle={{
                            color: "#111110",
                            backgroundColor: "transparent",
                            marginRight: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                          containerStyle={{
                            width: "100%",
                            borderRadius: "15px",
                            margin: 0,
                          }}
                        />
                      </form>
                      <BaseButton
                        onClick={() => handlePaymentType(4, "none")}
                        title={"Pay Now"}
                        style={{
                          background: ThemeUtil.color.blackColor,
                          color: "white",
                          fontFamily: "darkerGrotesque-bold, sans-serif",
                          fontSize: 20,
                        }}
                        buttonStyle={{
                          margin: 0,
                        }}
                        containerStyle={{
                          marginTop: 20,
                          width: "70%",
                          borderRadius: "15px",
                          margin: 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </dialog>

              <BaseButton
                title={"Continue to Payment"}
                style={{
                  background: ThemeUtil.color.blackColor,
                  color: "white",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontSize: 20,
                }}
                containerStyle={{
                  marginTop: 20,
                  width: "100%",
                  borderRadius: "15px",
                }}
                onClick={() => document.getElementById("card").showModal()}
              />
              <BaseButton
                onClick={() => handlePaymentType(1, "none")}
                title={"Cancel"}
                style={{
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontSize: 20,
                }}
                buttonStyle={{
                  color: "#111110",
                  backgroundColor: "transparent",
                }}
                containerStyle={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSideBar;