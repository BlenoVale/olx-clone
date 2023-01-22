import styled from "styled-components";

export const Container = styled.div`
    form {
        display:flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #0085c8;
        padding: 20px;
        gap: 15px;

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
                display: flex;

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

                .form-btn {
                    background-color: #0089FF;
                    border: 0;
                    outline: 0;
                    padding: 5px 13px;
                    border-radius: 4px;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    margin-right: 20px;

                    &:hover {
                        background-color: #006FCE;
                    }
                }

            }
        }

        .area-bigger {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 100%;

            .area-title {
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area-images {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                
                .imageItem {
                    background-color: #d9d9d9;
                    border-radius: 7px;
                    padding: 7px;
                    margin-right: 20px;

                    img {
                        width: 110px;
                        height: 110px;
                    }

                    .imageItem-btn {
                        width: 100%;
                        display: block;
                        background-color: #0089FF;
                        border: 0;
                        outline: 0;
                        padding: 5px 13px;
                        border-radius: 4px;
                        color: #fff;
                        font-size: 15px;
                        cursor: pointer;
                        margin-right: 20px;
                        text-align: center;
    
                        &:hover {
                            background-color: #006FCE;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        form {
            .area {
                flex-direction: column;

                .area-title {
                    width: 100%;
                    text-align: left;
                    margin-bottom: 10px;
                }

                .area-input {
                    width: 100%;

                    button {
                        width: 100%;
                        padding: 10px;
                    }
                }
            }
        }
    }
`;