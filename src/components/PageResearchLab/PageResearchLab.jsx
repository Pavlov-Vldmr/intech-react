import React from "react";
import logo from "./logo.png";


import "./PageResearchLab.css";
import Paragraph from "../Paragraph/Paragraph";

function PageResearchLab() {
 
    return (
        <>
            {/* Image */}
            {/* <img src="./images/logo.png" alt="" /> */}
            <img className="pageImg" src="./images/researchlab1.png" alt="" />
            <Paragraph title='Исследовательская лаборатория ООО НПО "Интех"' text="Зачастую, безопасность при тренировочных процессах остается вне зоны внимания владельцев объектов. Достаточно посмотреть в окно на детские площадки, и можно обнаружить ряд нарушений действующих нормативов. Также, за скобками остается и необходимость ежегодных испытаний спортивных сооружений и инвентаря в образовательных учреждениях. К примеру, одно баскетбольное оборудование подвергается нагрузочным тестам по 7 пунктам, не говоря уже об измерительных тестах на соответствие требованиям.">{<hr />}</Paragraph>
            <Paragraph title="" text="Наша лаборатория специализируется на исследованиях и испытаниях спортивных сооружений и инвентаря как в образовательных учреждениях, так и на объектах спорта (детские спортивные площадки, игровые площадки, тренажерные и спортивные залы)."></Paragraph>

            {/* list of text */}
            <Paragraph title="Мы максимально быстро и качественно проведем испытания на соответствие ГОСТам по следующим направлениям:">
                <ul>
                    <li>Футбольное, волейбольное, баскетбольное оборудование и площадки;</li>
                    <li>Детские игровые и спортивные площадки, в т.ч. и в дошкольных образовательных учреждениях;</li>
                    <li>Теннисное и хоккейное оборудование.</li>
                </ul>
            </Paragraph>

            <img className="pageImg" src="./images/researchlab2.png" alt="" />



            <Paragraph title="" text=""><hr /></Paragraph>
            {/* <Paragraph title="" text=""></Paragraph> */}
            {/* <Paragraph title="" text=""></Paragraph> */}
            {/* logo */}
            {/* <Paragraph title="1" text=""><hr /></Paragraph> */}

            <img className="pageImg logo" src={logo} alt="" />


        </>
    );
}

export default PageResearchLab;
