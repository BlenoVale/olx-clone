import styled from "styled-components";

export const ComponentArea = styled.div`
display: block;
border: 1px solid #fff;
margin: 10px;
text-decoration: none;
padding: 10px;
border-radius: 5px;
color: #000;
background-color: #fff;

.itemImage img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.ItemBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .itemName {
    color: #000;
    font-weight: bold;
  }

  button {
    background-color: #0089FF;
    border: 0;
    outline: 0;
    padding: 8px 20px;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: all ease .2s;

    &:hover {
        background-color: #006FCE;
    }
}
}
`;