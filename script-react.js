function Block(props) {
    return React.createElement(
        "div",
        { className: "main" },
        React.createElement(
            "div",
            { className: "main__block" },
            React.createElement(
                "p",
                { className: "main__block__p1" },
                props.p1
            ),
            React.createElement(
                "p",
                { className: "main__block__p2" },
                props.p2
            ),
            React.createElement(
                "p",
                { className: "main__block__p3" },
                props.p3
            ),
            React.createElement(
                "p",
                { className: "main__block__p4" },
                React.createElement(
                    "span",
                    { className: "main__block__p4__span1" },
                    props.p4span1,
                    " "
                ),
                props.p4
            ),
            React.createElement(
                "p",
                { className: "main__block__p5" },
                React.createElement(
                    "span",
                    { className: "main__block__p5__span1" },
                    props.p5span1
                ),
                props.p5
            ),
            React.createElement(
                "p",
                { className: "main__block__p6" },
                props.p6
            ),
            React.createElement(
                "p",
                { className: "main__block__p7" },
                props.p7
            )
        ),
        React.createElement(
            "p",
            { className: "main__p8" },
            props.p8,
            " ",
            React.createElement(
                "span",
                { className: "main__p8__span1" },
                props.p8span1
            )
        ),
        React.createElement(
            "p",
            { className: "main__p8_selected" },
            props.p8selected
        ),
        React.createElement(
            "p",
            { className: "main__p8_disabled" },
            props.p8disabled
        )
    );
};

var blockList = [{
    p1: 'Сказочное заморское яство',
    p2: 'Нямушка',
    p3: 'с фуа-гра',
    p4span1: '10',
    p4: 'порций',
    p5span1: '',
    p5: 'мышь в подарок',
    p6: '0,5',
    p7: 'кг',
    p8: 'Чего сидишь? Порадуй котэ,',
    p8span1: 'купи.',
    p8selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    p8disabled: 'Печалька, с курой закончился.'
}, {
    p1: 'Сказочное заморское яство',
    p2: 'Нямушка',
    p3: 'с рыбой',
    p4span1: '40',
    p4: 'порций',
    p5span1: '2',
    p5: 'мыши в подарок',
    p6: '2',
    p7: 'кг',
    p8: 'Чего сидишь? Порадуй котэ,',
    p8span1: 'купи.',
    p8selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    p8disabled: 'Печалька, с курой закончился.'
}, {
    p1: 'Сказочное заморское яство',
    p2: 'Нямушка',
    p3: 'с курой',
    p4span1: '100',
    p4: 'порций',
    p5span1: '5',
    p5: 'мышей в подарок',
    p6: '5',
    p7: 'кг',
    p8: 'Чего сидишь? Порадуй котэ,',
    p8span1: 'купи.',
    p8selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    p8disabled: 'Печалька, с курой закончился.'
}];
var mainContent = blockList.map(function (e) {
    return React.createElement(Block, Object.assign({ key: Date.now }, e));
});
ReactDOM.render(mainContent, document.getElementById('content__main'));
document.getElementsByClassName('main')[1].firstChild.classList.add('selected');
document.getElementsByClassName('main')[2].firstChild.classList.add('disabled');