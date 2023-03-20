import React, {useEffect, useState} from "react";
import styled from "styled-components";

export default function AddOptions(props) {
    const [optionItem, setOptionItem] = useState("");
    const [optionList, setOptionList] = useState([]);

    const qID = props;

    const onEnter = (e) => {
        if (e.target.value.length !== 0 && e.key === "Enter") {
            saveItem();
        }
    };

    const saveItem = () => {
        let updatedOptionList = [...optionList];
        updatedOptionList.push(optionItem);
        setOptionList(updatedOptionList);
        setOptionItem("");
    };

    return (
        <Wrapper>
            <OptionBox>
                {optionList.map((optionItem, index) => {
                    return (
                        <OptionItem key={index}>
                            <input type="checkbox" value={index} /> <label>{optionItem}</label>
                        </OptionItem>
                    );
                })}
                {optionList.length < 5 && (
                    <OptionNew>
                        <OptionInput
                            placeholder="옵션"
                            value={optionItem}
                            onChange={(e) => {
                                setOptionItem(e.target.value);
                            }}
                            onKeyDown={onEnter} />
                    </OptionNew>
                )}
            </OptionBox>
        </Wrapper>
    );

}

const Wrapper = styled.div`
  width: calc(100% - (160px));
  display: flex;
  flex-direction: row;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: auto;
  align-items: center;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  padding: 5px 0;
  margin: auto;
`;

const OptionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 5px 0 5px 10px;
  border-radius: 50px;
  margin-right: 5px;
`;

const Text = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #fff;
  line-height: 2;
  white-space: nowrap;
`;

const OptionNew = styled.div`
  position: relative;
  width: 80px;
  height: 30px;
  padding: 5px 10px;
  border: 2px solid #2b234a;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const OptionInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #2b234a;
  text-align: center;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #cccccc;
  }
`;