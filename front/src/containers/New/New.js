import React, {useState} from 'react';
import {inputChangeHandler, submitFormDataHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {createDataRequest} from "../../store/actions/dataActions";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import {Button, Checkbox, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import ButtonsContent from "../../components/UI/ButtonsContent/ButtonsContent";

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
        audio_name: '',
    });

    return (
        <>
            <div>
                <ButtonsContent
                    titleOne="Видео-графика из ссылки"
                    titleTwo="Видео-графика из файлов"
                    childrenOne={
                    <Grid container direction="column" spacing={2} alignItems="center">
                            <form
                                style={{width: '60%'}}
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
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="outlined" type="submit" style={{margin: '20px 0'}}>
                                        <label>
                                            Цитата
                                            <Checkbox onChange={e => setQuote(e.target.checked)}
                                            />
                                        </label>
                                    </Button>
                                </div>
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
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="outlined" type="submit" style={{margin: '20px 0'}}>
                                        <label style={{display: 'block', marginLeft: '8px'}}>
                                            Аудио
                                            <Checkbox
                                                onChange={e => setAudio(e.target.checked)}
                                            />
                                        </label>
                                    </Button>
                                </div>
                                {audio
                                    ? <FileInput
                                        name="audio_name"
                                        onChange={e => inputChangeHandler(e, setData)}
                                        setState={setData}
                                        placeholder={data.audio_name}
                                    />
                                    : null}
                                <Button color="secondary" type="submit" style={{margin: '20px 0'}}>
                                    Оформить заказ
                                </Button>
                            </form>
                        </Grid>
                            }
                            childrenTwo={
                                <Grid container direction="column" spacing={1} alignItems="center">
                                    <form style={{width: '60%'}}
                                        onSubmit={e => submitFormHandler(e, dispatch(createDataRequest(submitFormDataHandler(data))))}
                                    >
                                        <FileInput
                                            name="audio_name"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            setState={setData}
                                            placeholder={data.audio_name}
                                        />
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                            <Button variant="outlined" type="submit" style={{margin: '20px 0'}}>
                                                <label>
                                                    Цитата
                                                    <Checkbox onChange={e => setQuote(e.target.checked)}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
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
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                            <Button variant="outlined" type="submit" style={{margin: '20px 0'}}>
                                                <label style={{display: 'block'}}>
                                                    Аудио
                                                    <Checkbox
                                                        onChange={e => setAudio(e.target.checked)}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                        {audio
                                            ? <FileInput
                                                name="audio_name"
                                                onChange={e => inputChangeHandler(e, setData)}
                                                setState={setData}
                                                placeholder={data.audio_name}
                                            />
                                            : null}
                                        <Button variant="outlined" color="secondary" type="submit" style={{margin: '20px 0'}}>
                                            Оформить заказ
                                        </Button>
                                    </form>
                                </Grid>
                        }
                            />
                        </div>
        </>
    );
};

export default New;