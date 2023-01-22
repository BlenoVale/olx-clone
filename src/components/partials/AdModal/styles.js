import styled from "styled-components";

export const Container = styled.div`
.area {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 500px;

    .area-title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
    }

    .area-input {
        flex: 1;

        input, select, textarea {
            width: 100%;
            font-size: 14px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3px;
            outline: none;
            transition: all ease .4s;

            &:focus {
                border: 1px solid #333;
                color: #333;
            }
        }

        textarea {
            height: 150px;
            resize: none;
        }

        input[type=checkbox] {
            width: auto;
        }

    }
}
`;