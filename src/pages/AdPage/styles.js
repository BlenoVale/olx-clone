import styled from "styled-components";

export const Fake = styled.div`
    background-color: #ddd;
    width: inherit;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
display: flex;
margin-top: 20px;

.box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 25px;
    height: auto;

}
.box-padding {
    padding: 10px;
}

small {
    font-size: 13px;
    color: #0085c8;
}

.custom-line {
    margin: 10px 0;
    margin-right: 10px;
    min-height: 1px;
    background-color: #000;
}

.leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
        display: flex;
    }

    .adImage {
        width: 320px;
        height: 320px;
        margin-right: 20px;

        .each-slide img {
            display: flex;
            align-items: center;
            justify-content: cneter;
            background-size: cover;
            height: 320px;
        }
    }

    .ad-Info {
        flex: 1;

        .adName {
            margin-bottom: 20px;

            h2 {
                margin: 0;
                margin-top: 10px;
            }
        }
    }
}

.rightSide {
    width: 25%;

    .price span {
        color: #0085c8;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }

    .contacSellerLink {
        background-color: #49AEEF;
        color: #fff;
        height: 30px;
        border-radius: 5px;
        boc-shadow: 0px 0px 4px #999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 20px;
        transition: all ease .5s;

        &: hover {
            background-color: #0085c8;
        }
    }
    .createdBy small {
        display: block;
        margin-top: 10px;
    }
}

@media (max-width: 600px) {
    & {
        flex-direction: column;
    }

    .leftSide {
        margin: 0;

        .box {
            width: 320px;
            flex-direction: column;
            margin: auto;
        }

        .adInfo {
            padding: 10px;
        }
    }

    .rightSide {
        width: auto;
        margin-top: 20px;

        .box {
            width: 320px;
            margin: auto;
        }

        .contacSellerLink {
            width: 320px;
            margin: 20px auto;
        }
    }
}
`;

export const OthesArea = styled.div`
    h2 {
        font-size: 20px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;

        .AdItem {
            width: 20%;
        }
    }

    @media (max-width: 600px) {
        .list adItem {
            width: 50%;
        }
    }
`;

export const BreadChumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
        color: #000;
    }
`;