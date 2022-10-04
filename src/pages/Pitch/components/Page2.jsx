import Input from './../../../components/Input';

import disciplines from '../../../data/disciplines';
import Button from './../../../components/Button';

const Page2 = ({ pageState, credit }) => {
    const rubrics = disciplines[credit.discipline].rubrics;
    const rubric = rubrics[Object.keys(rubrics)[0]];
    const [page, setPage] = pageState;

    return (
        <>
            {rubric.questions.map((q, i) => <span key={i} className="flex flex-col items-start gap-4 w-full"><p className='font-semibold'>{i + 1}. {q.text}</p><Input className={'w-full'} inputClassName={q.type === 'textarea' ? 'h-64' : ''} type={q.type}></Input></span>)
            }
            <Button onClick={() => { setPage(page + 1) }} className="mt-24 ml-auto">Next</Button>
        </>
    );
};

export default Page2;