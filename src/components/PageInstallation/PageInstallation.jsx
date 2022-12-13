import React from "react";
import { Link } from "react-router-dom";

import "./PageInstallation.css";
import Paragraph from "../Paragraph/Paragraph";

function PageInstallation() {
    return (
        <>
            <Paragraph title="Монтаж оборудования" text="Монтаж оборудования как в линейном, поточном производстве, так и при проведение исследовательских работ требует тщательной подготовки. В том числе и зонирования, планирования территории.">{<hr/>}</Paragraph>
            <Paragraph title="" text="Для монтажа исследовательского дорогостоящего оборудования требуется не только учесть нагрузки и возможные риски, но и состояние, качество поддерживающей платформы и основы. В противном случае, существует большой риск опрокидывания и деформации оборудования."></Paragraph>
            <Paragraph title="" text="Именно поэтому, в отдельную ветку выведены монтажные работы сложного технологического оборудования и станин, т.к. требует глубокой проработки вопроса."></Paragraph>

            <Paragraph title="" text="Мы не извлекаем прибыль там, где можем просто подсказать."></Paragraph>
            <Paragraph title="" text=""><hr/></Paragraph>



        </>
    );
}

export default PageInstallation;
