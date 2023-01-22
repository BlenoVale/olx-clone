import styled from "styled-components";

export const UserInfo = styled.div`
    form {
        display:flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #0085c8;
        padding: 20px;
        gap: 30px;

        .area {
            display: flex;
            align-items: center;
            padding: center;
            max-width: 550px;
            gap: 30px;

            .area-title {
                width: 200px;
                text-align: right;
                font-size: 14px;
                font-weight: bold;
            }

            .area-input {
                flex: 1;

                select:focus {
                    border: 1px solid #0085c8;
                }

                input {
                    width: 100%;
                    height:30px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    outline: none;
                    transition: all ease .4s;

                    &:focus {
                        border: 1px solid #0085c8;
                        color: #333;
                    }
                }

                button {
                    background-color: #0089FF;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;

                    &:hover {
                        background-color: #006FCE;
                    }
                }
            }
        }
    }
`;

export const AdInfo = styled.div`
    .AdsList {
        display: flex;
        flex-wrap: wrap;

        .AdItem {
            width: 25%;
        }
    }
`;

export const AdModal = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 1;
min-width: 100%;
min-height: 100%;
background-color: rgba(0, 0, 0, .4);
display: ${props => props.modalDisplay};
justify-content: center;
align-items: center;

.modalArea {
    background-color: #fff;
    border-radius: 3px;
    padding: 30px;
    box-shadow: 0px 0px 3px #999;

    .btn-area-input {
        display: flex;
        justify-content: end;
    }

    button {
        background-color: #0089FF;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        margin-top: 30px;
        margin-right: 10px;

        &:hover {
            background-color: #006FCE;
        }
    }
}
`;