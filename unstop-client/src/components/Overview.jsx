import React from "react";
import view from "../pics/view_agenda.png";
import style from "../components/Overview.module.css";
import group from "../pics/group.png";

export default function Overview() {
  return (
    <div style={{ margin: "20px", display: "flex" }}>
      <div className="totalbox" style={{ width: "162px" }}>
        <table
          cellPadding={5}
          cellSpacing={10}
          style={{
            width: "100%",
            border: "1px solid gray",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            backgroundColor: "#ffffff",
          }}
        >
          <tr>
            <td
              align="left"
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "19.5px",
                color: "#1C4980",
              }}
            >
              Total Assessment
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                width: "120px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#EBE8FD",
                  borderRadius: "8px",
                  marginTop: "5px",
                }}
              >
                <img
                  src={view}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "28px",
                    color: "#1C4980",

                    margin: " 10px  0px 14px 5px",
                    textAlign: "center",
                  }}
                >
                  34
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="second" style={{ width: "370px" }}>
        <table
          cellPadding={5}
          cellSpacing={10}
          style={{
            width: "100%",
            border: "1px solid gray",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            backgroundColor: "#ffffff",
          }}
        >
          <tr>
            <td
              align="left"
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "19.5px",
                color: "#1C4980",
              }}
            >
              Candidates
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#EBE8FD",
                  borderRadius: "8px",
                  marginTop: "5px",
                }}
              >
                <img
                  src={group}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  verticalAlign: "top",
                  width: "40px",
                  height: "40px",
                  padding: "0px 75px 0px 20px",
                }}
              >
                <table
                  align="top"
                  valign="top"
                  style={{ width: "110px" }}
                  cellPadding={0}
                  cellSpacing={0}
                >
                  <tr>
                    <td
                      align="left"
                      valign="top"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        color: "#1C4980",
                        display: "flex",
                        borderRight: "1px solid gray",
                      }}
                    >
                      11,145
                      <span
                        style={{
                          fontSize: "60%",
                          lineHeight: "26px",
                          verticalAlign: "0px",
                          color: "#05C165",
                        }}
                      >
                        +89
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        color: "#1C4980",
                        borderRight: "1px solid gray",
                      }}
                    >
                      Total Candidate
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  verticalAlign: "top",
                  width: "40px",
                  height: "40px",
                  padding: "0px 20px 0px 20px",
                }}
              >
                <table
                  align="top"
                  valign="top"
                  style={{ width: "120px" }}
                  cellPadding={0}
                  cellSpacing={0}
                >
                  <tr>
                    <td
                      align="left"
                      valign="top"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        color: "#1C4980",
                        display: "flex",
                      }}
                    >
                      1,14
                      <span
                        style={{
                          fontSize: "60%",
                          lineHeight: "26px",
                          verticalAlign: "0px",
                          color: "#05C165",
                        }}
                      >
                        +89
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        color: "#1C4980",
                      }}
                    >
                      Who Attamped
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="second" style={{ width: "500px" }}>
        <table
          cellPadding={5}
          cellSpacing={10}
          style={{
            width: "100%",
            border: "1px solid gray",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            backgroundColor: "#ffffff",
          }}
        >
          <tr>
            <td
              align="left"
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "19.5px",
                color: "#1C4980",
              }}
            >
              Candidates
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#EBE8FD",
                  borderRadius: "8px",
                  marginTop: "5px",
                }}
              >
                <img
                  src={group}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  verticalAlign: "top",
                  width: "40px",
                  height: "40px",
                  padding: "0px 75px 0px 20px",
                }}
              >
                <table
                  align="top"
                  valign="top"
                  style={{ width: "110px" }}
                  cellPadding={0}
                  cellSpacing={0}
                >
                  <tr>
                    <td
                      align="left"
                      valign="top"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        color: "#1C4980",
                        display: "flex",
                        borderRight: "1px solid gray",
                      }}
                    >
                      11,145
                      <span
                        style={{
                          fontSize: "60%",
                          lineHeight: "26px",
                          verticalAlign: "0px",
                          color: "#05C165",
                        }}
                      >
                        +89
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        color: "#1C4980",
                        borderRight: "1px solid gray",
                      }}
                    >
                      Total Candidate
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  verticalAlign: "top",
                  width: "40px",
                  height: "40px",
                  padding: "0px 75px 0px 20px",
                }}
              >
                <table
                  align="top"
                  valign="top"
                  style={{ width: "110px" }}
                  cellPadding={0}
                  cellSpacing={0}
                >
                  <tr>
                    <td
                      align="left"
                      valign="top"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        color: "#1C4980",
                        display: "flex",
                        borderRight: "1px solid gray",
                      }}
                    >
                      11,145
                      <span
                        style={{
                          fontSize: "60%",
                          lineHeight: "26px",
                          verticalAlign: "0px",
                          color: "#05C165",
                        }}
                      >
                        +89
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        color: "#1C4980",
                        borderRight: "1px solid gray",
                      }}
                    >
                      Total Candidate
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  verticalAlign: "top",
                  width: "40px",
                  height: "40px",
                  padding: "0px 20px 0px 20px",
                }}
              >
                <table
                  align="top"
                  valign="top"
                  style={{ width: "120px" }}
                  cellPadding={0}
                  cellSpacing={0}
                >
                  <tr>
                    <td
                      align="left"
                      valign="top"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        color: "#1C4980",
                        display: "flex",
                      }}
                    >
                      1,14
                      <span
                        style={{
                          fontSize: "60%",
                          lineHeight: "26px",
                          verticalAlign: "0px",
                          color: "#05C165",
                        }}
                      >
                        +89
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        color: "#1C4980",
                      }}
                    >
                      Who Attamped
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="totalbox" style={{ width: "162px" }}>
        <table
          cellPadding={5}
          cellSpacing={10}
          style={{
            width: "100%",
            border: "1px solid gray",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            backgroundColor: "#ffffff",
          }}
        >
          <tr>
            <td
              align="left"
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "19.5px",
                color: "#1C4980",
              }}
            >
              Total Assessment
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                width: "120px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#EBE8FD",
                  borderRadius: "8px",
                  marginTop: "5px",
                }}
              >
                <img
                  src={view}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "28px",
                    color: "#1C4980",

                    margin: " 10px  0px 14px 5px",
                    textAlign: "center",
                  }}
                >
                  34
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
