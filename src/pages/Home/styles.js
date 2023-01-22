import styled from "styled-components";

export const SearchArea = styled.div`
background-color: #ddd;
border-bottom: 1px solid #ccc;
padding: 30px 0;

.searchBox {
    background-color: #9BB83C;
    padding: 30px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;

    form {
        flex: 1;
        display: flex;
        gap: 20px;

        input, select {
            height: 40px;
            border: 0;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000;
        }

        input {
            flex: 1;
            padding: 0 10px;
        }

        select {
            width: 180px;
            padding: 0 10px;
        }

        button {
           background-color: #49AEEF;
           font-size: 15px;
           border: 0;
           border-radius: 5px;
           color: #fff;
           height: 40px;
           padding: 0 30px;
           cursor: pointer;
           transition: all ease .5s;

           &:hover {
            background-color: #0085c8;
           }
        }

    }
}

.categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;

    .categoryItem {
        width: 25%;
        display: flex;
        align-items: center;
        color: #000;
        text-decoration: none;
        height: 50px;
        margin-bottom: 10px;

        &:hover {
            color: #999;
        }

        img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }
    }
}

@media (max-width: 600px) {

    .searchBox form{
        flex-direction: column;

        input {
            padding: 10px;
        }

        select {
            width: 100%;
        }
    }

    .categoryList .categoryItem {
        width: 50%;
        padding: 10px;

    }
}


`;

export const PageArea = styled.div`
    h2 {
        font-size: 20px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;

        .AdItem {
            width: 25%;
        }
    }

    .seeAllLink {
        color: #000;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin-top: 10px;
    }


    @media (max-width: 600px) {
        .list .adItem {
            width: 50%;
        }
    }
`;