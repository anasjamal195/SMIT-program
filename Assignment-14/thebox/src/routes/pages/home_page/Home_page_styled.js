import page_1_background from "../../../static/PNG's/Page_1_background.png"
const page_style = {
    "background-image":`url(${page_1_background})`,
    "baclground-size":"cover",
    "background-position":"center",
    "width":"100vw",
    "background-repeat":"no-repeat",
    "height":"100vh",
    
}

const column = {


    "left":{
        "height": "100vh",
        "text-align": "center",
        "display":"flex",
        "flex-direction":"column",
        "justify-content":"center"

    },
    "right":{
        "height": "100vh",
        "display":"flex",
        "flex-direction":"column",
        "justify-content":"space-around",
        "text-align":"center"
    }
}
const font = {
    "heading":{
        "font-family": "'Work Sans', sans-serif",
        "font-family": "Work Sans",
        "font-style": "normal",
        "font-weight": "600",
        "font-size": "72px",
        "line-height": "84px",
        "color": "#292E3D"
    },
    "card_heading":{
        "margin":"7% 5%",
        "margin-top":"10%",
        
        "font-family": "Work Sans",
        "font-style": "normal",
        "font-weight": "bold",
        "font-size": "20px",
        "line-height": "23px",
        "text-align": "center",
        "color": "#FFFFFF"
    },
    "card_body":{
        "margin":"7% 5%",
        "font-family": "Work Sans",
        "font-style": "normal",
        "font-weight": "bold",
        "font-size": "24px",
        "line-height": "28px",
        "text-align": "center",
        "color": "#FFFFFF"
    },
    "card_btn":{
        "font-family": "Work Sans",
        "font-style": "normal",
        "font-weight": "bold",
        "font-size": "18px",
        "line-height": "21px",
        "text-align": "center",
        "color": "#FFFFFF",
        "background-color":"#292E3D",
        
    }


}
const card = {
    "background-color":"#3559C7",
    
}

export  {page_style,column,font,card};