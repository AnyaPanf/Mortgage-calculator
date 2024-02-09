export function getBankName(value) {
    if (value === 'bank-vtb-new') {
        return 'ВТБ'
    }
    if (value === 'bank-alfa') {
        return 'СовкомБанк'
    }
    if (value === 'bank-domrf') {
        return 'Росбанк Дом'
    }
    if (value === 'bank-gpb') {
        return 'Газпромбанк'
    }
    if (value === 'bank-open') {
        return 'Открытие'
    }
    if (value === 'bank-delta') {
        return 'Райффайзенбанк'
    }
    else {
        return ' Название банка'
    }
}