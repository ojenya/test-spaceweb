import React from 'react'

const Maintance = (props) => {
    return (
        <>
         <div className="container-content">
                    <div className="api">
                        <div className="subtitle">Тестовое задание</div>
                        <div className="title">SpaceWeb</div>
                        <hr/>

                        <div className="subtitle">
                            ✅Необходимо реализовать SPA (Single Page Application), которое будет
                            показывать заголовки статей и раскрывать полный текст статьи при
                            нажатии на заголовок.
                            <br/><br/>                            
                            Цель: проверить верстку по макету и знания
                            ReactJS.
                            <br/><br/>
                            ✅Статьи в виде XML находится по ссылке <a href="https://sweb.ru/export/turbojournal/">https://sweb.ru/export/turbojournal/</a>
                            <br/>
                            где заголовок содержится в тэге: <br/>
                            <code>
                                &lt;turbo:topic&gt;
                                Топ-6 сервисов для проверки кроссбраузерности сайта
                                &lt;/turbo:topic&gt;
                                <br/>
                            </code>
                            а текст статьи в тэге: <br/>
                            <code>
                                &lt;turbo:content&gt;
                                &lt;![CDATA[
                                ….
                                ]]&gt;
                                &lt;/turbo:content&gt;
                            </code>
                            <br/>
                            ✅ Статьи должны прогружаться в приложение динамически из URL, а не
                            просто сохранены в виде локальных данных.
                            <br/><br/>
                            ✅За основу необходимо взять макет из прикрепленного файла
                            «Поддержка_История.png». Это макет от другой задачи, но нам важно в
                            принципе понять навыки верстки. Поэтому на основе этого макета вместо
                            номера заявки будет тема статьи, а при клике подгружаться содержимое
                            статьи. <br/> ✅Остальное нужно сверстать без изменений (надписи текстом,
                                ❌картинки в виде иконок), как в макете. <br/><br/>
                            ❌Шрифт Proxima Nova (как на основном сайте https://sweb.ru/ ), иконки и
                            элементы можно взять отдельно в файле «UIKit _ Компоненты.png»
                            <hr/>
                            {/* ✅ Тестовые данные <a href="https://jsonplaceholder.typicode.com/posts">JSONPlaceholder</a><br/> <br/> */}
                            ✅ <b>БЕСПЛАТНЫЙ</b> шрифт Montserrat
                        </div>
                    </div>
            </div>    
        </>
    )
}



export default Maintance
