import React, { useState, useEffect } from "react";
import "./Memo.css";

const Memo = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memoMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memoMessage();
  }, [contract]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            
            <td>
              <p className="msg">NAME</p>
            </td>
            <td>
              <p className="msg1">TIME</p>
            </td>
            <td>
              <p className="msg2">MESSAGE</p>
            </td>
            <td>
              <p className="msg3">FROM</p>
            </td>
          </tr>
        </tbody>
      </table>
      {memos.map((memo) => {
        return (
          <div
            className="container-memo"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "tranparent",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "7px",
                      fontWeight: "bold",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#tranparent",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "7px",

                      fontWeight: "bold",

                      width: "800px",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "tranparent",
                      border: "1px solid black",
                      borderCollapse: "collapse",

                      fontWeight: "bold",

                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    className="td"
                    style={{
                      backgroundColor: "tranparent",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "7px",

                      fontWeight: "bold",

                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Memo;
