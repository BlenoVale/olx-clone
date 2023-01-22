import styled from "styled-components";

export const HeaderArea = styled.div`
background-color: #FFF;
min-height: 70px;
border-bottom: 1px solid #CCC;

.container {
    max-width: 78%;
    height: inherit;
    margin: auto;
    display: flex;
}

a {
    text-decoration: none;
}

.logo {
    flex:1;
    display: flex;
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 33px;
        font-weight: bold;
    }

    .logo-1 { color: #FF0000; }
    .logo-2 { color: #00FF00; }
    .logo-3 { color: #0000FF; }
}

nav {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        height: 40px;
        gap: 40px;
    }

    li {

        a, button {
            border: 0;
            background: none;
            color: #000;
            font-size: 18px;
            text-decoration: none;
            cursor: pointer;
            outline: 0;

            &:hover {
                color: #999;
            }

            &.button {
                background-color: #FF8100;
                border-radius: 4px;
                color: #FFF;
                padding: 5px 10px;
            }

            &.button:hover {
                background-color: #E57706;
            }
        }
    }
}

@media (max-width: 600px) {
    & {
        height: auto;
    }

    .container {
        flex-direction: column;
    }

    .logo {
        justify-content: center;
        margin: 10px 0;
    }

    nav {
        justify-content: center;
    }

    nav ul {
        flex-direction: column;
        height: auto;
        gap: 20px;
        margin-bottom: 15px;
    }
}
`;