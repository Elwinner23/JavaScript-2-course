import { el } from 'redom'
//создание элементов на странице с redom
export const container = el('.container',
    el('.card',
        el('form.card-form',
            el('.card-block',
                el('label.card-label', 'Номер карты'),
                el('input.card-input.input-number', { type: 'text', placeholder: '0000 0000 0000 0000', maxlength: '19' })
            ),
            el('.card-block-center',
                el('.card-block',
                    el('label.card-label', 'Срок действия'),
                    el('input.card-input.input-date', { type: 'text', placeholder: 'ММ/ГГ', maxlength: '5' })
                ),
                el('.card-block',
                    el('label.card-label', 'Проверочный код'),
                    el('input.card-input.input-code', { type: 'text', placeholder: 'CVC/CVV', maxlength: '3' })
                )
            ),
            el('.card-block',
                el('label.card-label', 'Email для отправки чека'),
                el('input.card-input.input-email', { type: 'email', placeholder: 'qqq@qq.qq' })
            )
        ),
        el('.card-img#img')
    ),
    el('button.btn', 'Оплатить')
);