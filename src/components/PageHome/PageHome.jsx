import React from "react";
import { Link } from "react-router-dom";

import styles from "./PageHome.module.css"
import Paragraph from "../Paragraph/Paragraph";
import BlockWithLink from "../BlockWithLink/BlockWithLink";
import BlockWithLinkGroup from "../BlockWithLinkGroup/BlockWithLinkGroup";

function PageHome() {
    return (

        <>
            <div className="container">
                <div className={styles.mainPageImg}>
                    <h1>Научно-производственное объединение <span>InTech</span></h1>
                    <img src="./images/main-page-img.png" alt="Intech - Main Page Image" />
                </div>
            </div>

            <Paragraph title="Кто мы" text="
                Наше объединение - это множество компаний различных отраслей. 
                Начиная от научно-конструкторских исследований и до сборки и внедрения опытных образцов. 
                Основной специализацией компании и объединения остается металлообработка. 
                Среди основных достижений можно определить установки автоматического отбора забортной воды, 
                разработка трало-защитных конструкций устья скважины, установку депарафинизации светлых нефтепродуктов.
                Мы заключили соглашения с ведущими конструкторскими бюро и проектными институтами по всей территории 
                Российской Федерации, в том числе и по нефтегазовой отрасли. Свободный доступ не только 
                к пресноводным озерам, но и в акватории Тихого океана и Охотского моря, позволяет конструировать 
                и  собирать уникальные аппараты для проведения подводных работ.
                ">{<hr />}</Paragraph>
            <Paragraph title="Что мы умеем">{<hr />}</Paragraph>
            <div className="container">
                <BlockWithLink title='Испытательная лаборатория ООО НПО "Интех"'
                    text="Проведение испытательных тестов спортивного оборудования и инвентаря и объектов на соответствие действующим нормам в области безопасности спорта."
                    link="/research-lab"
                    linkText="Испытательная лаборатория"
                    colorModif="Light">
                </BlockWithLink>
                
                <BlockWithLinkGroup>
                    <BlockWithLink title='Научные исследования'
                        text="Основной задачей в сфере НИОКРа является создание или модернизация сложных технологических устройств. В объединении имеются лаборатории по проведению опытов и исследований в области физики, химии и электроэнергетики, в том числе и опытные стенды. Что позволяет минимизировать время проведения работ."
                        link="/research"
                        linkText="Научные исследования"
                        colorModif="Light">
                    </BlockWithLink>
                    <BlockWithLink title='Ремонтно-восстановительные работы'
                        text="Ремонт любого сложного технологического оборудования, в том числе блоков управления и микросхем. В распоряжение специалистов широкий спектр диагностического оборудования, в т.ч. осциллографы."
                        link="/repair"
                        linkText="Ремонтно-восстановительные работы"
                        colorModif="Dark">
                    </BlockWithLink>
                </BlockWithLinkGroup>

                <BlockWithLink title='Монтаж оборудования'
                    text="Монтаж сложного оборудования и производственных линий. В копилке нашего опыта реализация проектов по монтажу линий как в пищевой отрасли, так и в горнодобывающей." 
                    link="/installation"
                    linkText="Монтаж оборудования"
                    colorModif="Light">
                </BlockWithLink>
                <BlockWithLink title='Производство'
                    text="Производство металлических изделий и конструкций промышленно-гражданского назначения. Начиная от простых малых архитектурных форм, заканчивая сложными точными деталями." 
                    link="/production"
                    linkText="Производство"
                    colorModif="Dark">
                </BlockWithLink>
                <BlockWithLink title='Информационные решения'
                    text="Разработка информационных решений любой сложности." 
                    link="/it-solutions"
                    linkText="Информационные решения"
                    colorModif="Light">
                </BlockWithLink>
            </div>

        </>
    );
}

export default PageHome;
