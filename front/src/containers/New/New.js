import React, {useState} from 'react';
import {inputChangeHandler, submitFormDataHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {createDataRequest} from "../../store/actions/dataActions";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import {Button, Checkbox} from "@mui/material";
import {useDispatch} from "react-redux";

const New = () => {
    const dispatch = useDispatch();
    const [quote, setQuote] = useState(false);
    const [audio, setAudio] = useState(false);
    const [data, setData] = useState({
        status: 'order_creation',
        stage: 'results_confirmed',
        link: '',
        quote_enabled: quote,
        audio_enabled: audio,
        quote_text: '',
        quote_author_text: '',
        audio: '',
    });

    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '100px'}}>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.22 408.72">
                        <path d="m131.73,115.45c-1.14,1.6-.7,3.68,1.92,7.3l57.05,75.44c1.79,2.42,3.46,4.26,3.67,6.27h0c-.2,1.97-1.87,3.81-3.67,6.27l-57.05,75.44c-2.04,2.84-3.06,5.66-1.92,7.26,1.51,2.17,5.42.21,7.99-1.19l139.25-81.47,5.79-3.57c3.13-2.13,3.11-3.51,0-5.49l-5.79-3.57-139.25-81.51c-2.71-1.64-6.48-3.36-7.99-1.19Z" />
                        <path d="m56.5,216.56l-51.63,30.59c-3.75,2.17-5.58,6.5-4.61,10.86l1.34,5.45c9.14,31.84,28.4,62.97,50.78,85.52,34.88,35.1,83.03,59.82,143.76,59.74,53.63-.07,105.76-21.61,143.66-59.74,22.37-22.55,39.29-50.14,49.15-80.32.57-1.72,1.14-3.44,1.63-5.21l1.34-5.45c1.06-4.26-.86-8.69-4.61-10.86l-51.63-30.59c-2.81-1.64-6.11-1.8-9.05-.37-1.34.62-3.33,2.46-3.72,5-.35,2.32-1.06,6.77-1.62,9.55-1.6,7.93-3.36,14.52-8.52,26.53-18.64,43.34-64.67,76.22-116.72,76.22-61.78,0-113.86-44.12-125.72-102.74-.77-3.73-1.1-5.73-1.77-9.55-.53-3.03-1.7-4.39-3.04-5-2.93-1.44-6.24-1.27-9.05.37Z" />
                        <path d="m56.5,192.16l-51.63-30.59c-3.75-2.17-5.58-6.5-4.61-10.86l1.34-5.45c9.14-31.84,28.4-62.97,50.78-85.52C87.27,24.64,135.42-.08,196.15,0c53.63.07,105.76,21.61,143.66,59.74,22.37,22.55,39.29,50.14,49.15,80.32.57,1.72,1.14,3.44,1.63,5.21l1.34,5.45c1.06,4.26-.86,8.69-4.61,10.86l-51.63,30.59c-2.81,1.64-6.11,1.8-9.05.37-1.34-.62-3.33-2.46-3.72-5-.35-2.32-1.06-6.77-1.62-9.55-1.6-7.93-3.36-14.52-8.52-26.53-18.64-43.34-64.67-76.22-116.72-76.22-61.78,0-113.86,44.12-125.72,102.74-.77,3.73-1.1,5.73-1.77,9.55-.53,3.03-1.7,4.39-3.04,5-2.93,1.44-6.24,1.27-9.05-.37Z" />
                    </svg>
                </div>
            </div>
            <div style={{width: '100%', justifyContent: 'center'}}>
                <form
                    style={{width: '50%'}}
                    onSubmit={e => submitFormHandler(e, dispatch(createDataRequest(submitFormDataHandler(data))))}
                >
                    <FormInput
                        type="text"
                        placeholder="Вставьте ссылку"
                        name="link"
                        value={data.link}
                        onChange={e => inputChangeHandler(e, setData)}
                        className="form_input"
                    />
                    <label>
                        Цитата
                        <Checkbox onChange={e => setQuote(e.target.checked)}
                        />
                    </label>
                    {quote
                        ?
                        <>
                            <FormInput
                                placeholder='Мы – телеканал "Настоящее Время". Мы делаем яркие видео, рассказываем о важных новостях и злободневных темах, готовим интересные репортажи и передачи – смотрите нас на спутнике, в кабельных сетях и в интернете. Каждый день мы присылаем дайджест всего, что нужно знать, одним письмом, а также превращаем цифры в понятные истории.'
                                multiline
                                name="quote_text"
                                value={data.quote_text}
                                onChange={e => inputChangeHandler(e, setData)}
                            />
                            <FormInput
                                placeholder="Павел Буторин, директор Настоящего Времени"
                                onChange={e => inputChangeHandler(e, setData)}
                                name="quote_author_text"
                                value={data.quote_author_text}
                                type="text"
                            />
                        </>
                        : null
                    }
                    <label>
                        Аудио
                        <Checkbox
                            onChange={e => setAudio(e.target.checked)}
                        />
                    </label>
                    {audio
                        ? <FileInput
                            name="audio"
                            onChange={e => inputChangeHandler(e, setData)}
                            setState={setData}
                            placeholder={data.audio}
                          />
                        : null}
                    <Button variant="outlined" type="submit">
                        Оформить заказ
                    </Button>
                </form>
            </div>
        </>
    );
};

export default New;