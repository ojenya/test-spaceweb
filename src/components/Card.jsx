import React from 'react'


const Card = (props) => {
    return (
    
        <>
        <details>
            <summary>
                <span class="summary-title">#{props.id} {props.userID} {props.title}</span>
                <div class="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </summary>

            <div class="summary-content">{props.body}</div>
            <div class="summary-chevron-down">
		        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
		</details>

        <hr class="rounded"></hr>
        </>
    )
}



export default Card