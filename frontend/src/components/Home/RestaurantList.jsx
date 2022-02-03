import React from 'react'
import useRestaurant from '../../../src/hooks/useRestaurant'
import "../../pages/Home/home.css"
const RestaurantList = () =>{
    const { restaurants } = useRestaurant()
    return (
        <div className='container-list row'>
            { restaurants.map((restaurant)=>(
                <div key={restaurant.id} className="card-restaurants d-flex flex-wrap p-3 justify-content-center">
                    <div className="card p-3 card-reser">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX///8dHRsAAADs7OyJiYnKysrc3Ny7u7v6+vpgYGA1NTWtra0bGxnn5+fy8vLR0dGjo6MiIiIJCQnExMTh4eFFRUUXFxXY2Nhubm61tbWVlZXv7+9bW1t9fX0YGBi9vb2Tk5NRUVEQEA1oaGiDg4Oenp4tLS1MTEx3d3U9PT0zMzMTExMHBwA7OzkpKSYhIR+ziaKlAAAPBElEQVR4nO1dCXeiOhTWKyrKIioC7op7sZ3//+9eVpYkgO1YYN7hm3Om1gbMx81ds9jptGjRokWLFi1atGjRokWLFi1atGjRokWL96M3mS+d1UHTDhdj2PetuvvzRugDZ/sJDM/nk736Oq32/wOaPWM0BQi9rgQzRCzH9+G67i7+BWzjiMjtZHIxSQ+x3Bh23R39GQZ3xC6fXIwIIJjU3dnvYzCCp/kCPYIZ3OZ1d/h7cE8vCS8txts/JEX98E16GB4Evbo7/iImY/g2PYxZtKy76y9BA4VTeAkmnPS6e1+K9a1EfF6R6Xl+uXUTKMHALNE+WIyLWnjQr5tCIYYlw3MHh46+KZKxCU1WRAOKXV80I/I5/6sMjRL1g1uPNyx4ECYM66WRixJ+Jmi4FbGTk1lU1LCZetgvHp/hjArmTiIW6+NZwPDZxDzKhYK0AQ3PT9bpAEjYWWhqwkedTNSwrwWDDvG784a3iOnYtoBh0rwxGBUMOeTdjLihAztmJ52CMQ1Nyy6cIgPz/PJTTZEJBYe86ud7TXPXrKBtUGRgYJRN2YdIhhfyyv3IjWpgWwePXCzyFdBEwUsKPpLMHDz2pr3IlTz4is+pCwUDNAyz2qRt0H+Tp8fNyD3v0vBWPY882PkDFB5CFnskY89PGF7yLm6Qu7/nWlAIhKb2HxrQuLsITvStZY6piY5V88jDIG+Upb0Dg4XkRSyMdQ2BMfA9talpjAhHOaYw7Cp6OMcMsR9cf8zgRn2BdZ0pRTiqlkce8gQIC2XReg+mSdy4vXg+P6kD0Y/Ke0Az0vsgZ4DlObIlZoh9AKIVfjAbpDSmWQdTF3rKh2/K6hcDpVU7j4TeGwivLAbXFLcxw0oYlOCgIhj+UbvpFfkfuc3oDxm/AURPNg5VSXATzIx+VWRJcFTPGVnM+V2gG34SA3MHb8aexVx2F2EDkoq5QoCS9+M4AGOIxD6jTmKLAlNWtJ9IDM2v+kPuk2RiCtTPmkaMPFI5oF5gBSbPjdydyBBqn7DQJQGGYYHi9Lo8RDsDt7MoVuOFNGsqMHwefrn/pdiLBJ+fhfUUq8tliBwDcJsTC90Ns5bG+/zd7pfjLoxQHmDmoheP0gAxpInvEDGkCSJyksLzqnnGSZ9mnrhZ6Jrp0MUypKP0BLwEukcJIrOlggjrLl1kwzSvsGTrM69m/eEy3AAvgfaBD9JtdkjUrYSZTDecFibhmxAG5AUepVSGR9g96TW9pa64I7rn5hd7/wJGqVKFlNtmMYGud6WxdTxK9dvT87JXCUpozn6r668hFcZASXKz8JKCbuwP9UUYXTNRj2hloNYit5v0hk485INOXHAj24tl+Jhl046LSLBWKxPHaUXJA4HdNTPPIR6l63GUCQzuQu5bduPfBX/c5fOyAS/bMNeX8odZdIWcIqy1PsrcfPhnUNIwFZLzMReP0gxcMTKKajWjDxI6PsdlC+r0VIxpMmdBRqmkuKIKdr3FL/T7ZZAcFTalOc0prViex55HbyqL8FPKmKY1LtUjqURu8pdAmPoNH+yJxN49Rl/OLqHGaBQrDJxLm/lSxpHrMgMFwRodIQpOeBZQgJ6UxhZMHZ0khnXmvHPgRr8A+kNRVsy/TlpiUqenn7+ypGWhLJvmXynO+9a5qGRZzk/fqCdmCpaKCNW1OtcFlZe89NyleaZoPJKb+VF6OrWxy4IwrK/8hXdeN2P/tylvsx6nxA77qnudA0W0tpwVLc2L0gGeBmkidmoypgnVbQwNtoJHtk4lS/OS6cPeBrpmmA5ZEocIZXFuNXCg+4TRMNYrexKUr9s24eq4Pau/JU2z1YkDfzp1RjIJ9qQ7Ecweo+3hcD4tpq8tS/cAQgAWqWadI5uMMbtN2Dbi88dtemH4fD7DwnXLghiTl9kJT7pMqN5sgsEqUbZXIdSxXWyDw7JKcgWwx4Xr8L4BIXJfL568vF8r1MHYzxgKgecI6i5tk068jR+yq4JJ0aD27XeFK8y/DamSXWtRDWP1Vn7dRuhcGmIh+g0Ma5/UzeD2PgPDsOvWPy+fwvslWFCxqQVv8vFpvFDnqRCqFUp/zbBJariO3i9CrxEBNsdviHDWJDW0Z+8XYUPWGTIUbpn4McP6Q9AE0oTJG7CbNWh/ljT38A5Ejwb5+3fHowRlixoqxRszwoRgk9z92nu7Gta9AkiAYuLy72DuGlEtTFC2P/m7aEo9O8F7DU29q2PUeGfIVrZsqh68j2EDd/ASKHdQ/I/4lZ/08CK/Zm1uzaA/+2uPbzatrJaFlb8n9zV4DT6qg+L84/OAMJ7TZkx3FqH/9WMhmnBvUAqRC/38gzO5iPjMpqw3KMPgCN+fUItg26RSUwnmt2+qogeb5mtfBvPFNwZqCLfGBdflmATwkhg9gNM/SA/Ddm6IY2F04z3hsWpY6vctuJjjM1SSxIeLfhyadCbHz2D3D6MIAGZRFO0wvCia4UNwF9thg2qDfwlrbmjB5vZ4jMePxXG0dfaDf8Gn/wD/U1otWrRo0aJFixYtWrRoweD7Yt7jOo5i1tL2BwRuqrl9cZx0g/gOyVfdzLXT6ZzZ4dt3nEoLNyAd/+mgHF1O9vr822xmQby6fI5+jbeALKHLXx75vJI1ptekz0jYAFS6LAGkPVMByO9hgrPtGf17IIpcPvhRxCu1hjDmL0dsYlf/gsjxfWMKyb4l9B7AOwmUQSYzhqtiq18fpvTFIAJ+IuoJpsliOwVB9ABojfsjmSq0oRspBsjvQSJoz2CrWCOICLJu7Xm3Ow8IkqOfFAQffIrQSP7Wh82i0pUXEsEBwF5xYlVC0AbWwTV6kfRcQRD4il83fiZIqsG20qUXEsEl3CyIpHYJwQ5fIjmAmZ30XCaox/dONQtgZVQ6dy8R1OBsK8xoiuCUETSQORzHRlgmuE4T5KZ3DPM5VHmssURwAw4yCtJqcgVBDZmOUTzclBJk7BOCSMPdNZL8GxmUQCKIFWcja4mC4AK10uKNdEodZLdJCCINx8QrLISLBG386QdZSxQE8aMYAt/YqSB44qcbdywrbvXV6dyq3FIvEiT+bilriUzQwu7bB5O9rSC4B8khaPjR3atcYSISdDC3AexELZEJotiGXM+CNQVBZFF2wq7BEV4ee6kyWBMJBrhzCi1JCOozKpcLGYAzLiQVQR9A+EYNItO+wg39GkSCC7KA50MK1jKRDHkVkHjnxIebiiDyJNkV20TDsd+vbqpUIGhT036SFlonsSg//XZMHsWBn5SkJIjPyk2vWOtTlYUKNzUJBF0qHk0K1tCwOiBoIzTqiAB1qn1xlqQmiM+2SDE0qNH9qDBYEwguaTf3kpbE+eDuQN/wqW8b8OQnhyBmmOw5DyjbbYULEQWCByo6H8Rd1MhmGsvlch9n9EtqP9Y8XMkjiBke+OsbFd2lwmBNIHijndElLUEEs/HpmZmPK1tWmEsQyYuvPLTZbfsV5rwCwYhFKdJqcongjdmhDRuB+QQ7R241LWaAexUGa1mCqAePBcItEo9ZEwnqUxjjlosp89oFBJHgqKldApBrFlDd8UBZghOIIXzNh0jQSlpSBykTNC781gYLtg/JRZXt98kSvMB00se4iFoiEkRqRBr292z8yQSv8TC3mcSOEJDbT4LqdmxlCd55GtETgw2R4IUHYTqLqGWCn4keL+gZOjueRiyTxr+NLMExHzq6eIiWSDCIXRmzNiqC8bJtGhlZcQY8qS5YyxJM8puFoCUiwWTXXEAtyB4++N82OQQncSlEV5VefweZTxok5lvUEpFg8igucMU/5kk+daMEH8kQHZEh6kB8FnVUWbCWITiE+PwJR9ASgaCfFO37NOoZJJWqKe39MfEWX0SY9+ShnSrb1ZQhqMUFCDzvkMlVBYLDRBgWvQWylMP4DRKvnOOAlo2MRxKzpT7pl5GJKTZJLaYnaIlA8JzKZBmzO7tCX7DMyuL+HSn0ItUQY1lZsIbSg66JMQs6+jWlGZDVEoHgJpUPfNDhhkQIgWNosziOdVAQsBruLztK3U3NRfmVBWtJbLHBjzzZ1v/IBmv9TDFYT5+4emdRj3tlE2xxpclgt+4SxsvUqF9XdoiVG6PX0d3UgW89N/OI9eyvbmoidB3/qa8FwTndcX2v3e8HRthO38J1/6HNFS1a/BbsXo2oYprX0OrD+R/dJNOiZuhao7cW/y10FHr8rwlajd86/W2sHRwm9g1arjSGS8MwWLzmnzU5695vHWbeBzgW1x1aecCXGUb26eyN5F741/ivA9y0qkBtghMZfUcL9ROYXq/XHS3GLGExlgJiDY4wpgwNnO/0WOKwA3ThV7bSOAL4CJOYPEkfLqhxZfNLffy5vAQ0See4ODkNhKTNR4xtlrUygrSK1FWVOYMNJsNoDZL0y8G58qaiOdA5jC6d7ZEmapNUjubit9xTNty44zLGheZNWYIq04QJ2lyrncWZz8g5QD6rmu/m3cP+qwNLmounCVqqb1knwvNp175J8KgN+XAgBAcVfYv7EHQwrhbViMwQnT5kO0BGmUU187Uh6rD6pw7zHpcZIbgU5+d+CUtAinaxaQ1wAsfN5sjqJr2rVNnrkWKwTd/PELxe0YXipHAAu3jizEeDY8fuh0j3BqXfUPkmIIJzcG0qlAloq9UhNm8XOGZVkMrOppYxQ/Brc1mtRCkG46UxYg0uyKaMGCeHFEgqWjOKu/mBBhBxDROhnm7tsrXRNamKrRUSzNXBzoZW345H39eYEjpgXSoaoFQfkIGhI2kiVromgiVA1HTdpeP5RYJLanNp8cmNP/OFb3l6D1b0qVKhpAlO8IDTBU/f1TqPEWtFCK6Zv84nOCQEkVOwbaa8hKBT1cHphx35IRN00v3n0GaozYyOW0LQZ9XhfIJn8kXmK1IKPm3iW+tVle7PX+QHtRsTGKDnbLNp9JWui5GMhdqtWCRjwUXXT6zBVNPxlZnG+umo233amlpYhw5X8uwuFa1MD2iVnc6FsbUw1LITWyeWFZbovSuTGmnAJLyjc9mZtg/yHv2GUDpCfKqxFyBvHX6BjgyL6r1PzKdOdrf4TBDWfC4/5N7e7/AJhl7SwCUXZoMv8h67V5/ef05+XdOwqT1poEWLFi1atGjRokWLFi1atGjRokWLFi3K8B/K69wTXE3spAAAAABJRU5ErkJggg=="/>
                        <h1>{restaurant.name}</h1>
                        <p className="reser-descrip">Dirección del local: {restaurant.address}</p>
                        <button className="btn btn-dark text-white">Descubreme</button>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default RestaurantList