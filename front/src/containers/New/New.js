import React, {useState} from 'react';
import {
    inputChangeHandler,
    inputChangeHandlerChecked,
    submitFormDataHandler,
    submitFormHandler
} from "../../components/UI/Form/Handlers/Handlers";
import {createDataRequest} from "../../store/actions/dataActions";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import {Button, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import ButtonsContent from "../../components/UI/ButtonsContent/ButtonsContent";
import FormCheck from "../../components/UI/Form/FormCheck/FormCheck";

const New = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        status: 'order_creation',
        stage: 'results_confirmed',
        link: '',
        request_type: 'video_auto',
        quote_enabled: Boolean,
        audio_enabled: Boolean,
        quote_text: '',
        quote_author_text: '',
        audio_name: '',
        fore_ground: '',
        back_ground: '',
    });

    return (
        <>
            <div>
                <ButtonsContent
                    onClickOne={() => inputChangeHandler({target:{name: 'request_type', value: 'video_auto'}}, setData)}
                    onClickTwo={() => inputChangeHandler({target:{name: 'request_type', value: 'video_files'}}, setData)}
                    titleOne="Видео-графика из ссылки"
                    titleTwo="Видео-графика из файлов"
                    childrenOne={
                    <Grid container direction="column" spacing={2} alignItems="center">
                            <form
                                style={{width: '60%'}}
                                onSubmit={e => submitFormHandler(e, dispatch(createDataRequest(submitFormDataHandler(data))))}
                            >
                                <label>Ссылка:</label>
                                <FormInput
                                    type="text"
                                    placeholder="Вставьте ссылку"
                                    name="link"
                                    value={data.link}
                                    onChange={e => inputChangeHandler(e, setData)}
                                    className="form_input"
                                />
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="outlined" type="button" style={{margin: '20px 0'}}>
                                        <label>
                                            Цитата
                                            <FormCheck
                                                name="quote_enabled"
                                                onChange={e => inputChangeHandlerChecked(e, setData)}
                                            />
                                        </label>
                                    </Button>
                                </div>
                                {data.quote_enabled === true
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
                                    <Button variant="outlined" type="button" style={{margin: '20px 0'}}>
                                        <label style={{display: 'block', marginLeft: '8px'}}>
                                            Аудио
                                            <FormCheck
                                                name="audio_enabled"
                                                onChange={e => inputChangeHandlerChecked(e, setData)}
                                            />
                                        </label>
                                    </Button>
                                </div>
                                {data.audio_enabled === true
                                    ? <FileInput
                                        name="audio_name"
                                        onChange={e => inputChangeHandler(e, setData)}
                                        setState={setData}
                                        placeholder={data.audio_name}
                                    />
                                    : null}
                                <Button variant="contained" color="secondary" type="submit" style={{margin: '20px 0'}}>
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
                                        <label>Основной документ / изображение:</label>
                                        <FileInput
                                            name="fore_ground"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            setState={setData}
                                            placeholder={data.fore_ground}
                                        />
                                        <label>Документ / изображение для заднего плана:</label>
                                        <FileInput
                                            name="back_ground"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            setState={setData}
                                            placeholder={data.back_ground}
                                        />
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                            <Button variant="outlined" type="button" style={{margin: '20px 0'}}>
                                                <label>
                                                    Цитата
                                                    <FormCheck
                                                        name="quote_enabled"
                                                        onChange={e => inputChangeHandlerChecked(e, setData)}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                        {data.quote_enabled === true
                                            ?
                                            <>
                                                <label>Текст цитаты:</label>
                                                <FormInput
                                                    placeholder='Мы – телеканал "Настоящее Время". Мы делаем яркие видео, рассказываем о важных новостях и злободневных темах, готовим интересные репортажи и передачи – смотрите нас на спутнике, в кабельных сетях и в интернете. Каждый день мы присылаем дайджест всего, что нужно знать, одним письмом, а также превращаем цифры в понятные истории.'
                                                    multiline
                                                    name="quote_text"
                                                    value={data.quote_text}
                                                    onChange={e => inputChangeHandler(e, setData)}
                                                />
                                                <label>Автор цитаты:</label>
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
                                            <Button variant="outlined" type="button" style={{margin: '20px 0'}}>
                                                <label>
                                                    Аудио
                                                    <FormCheck
                                                        name="audio_enabled"
                                                        onChange={e => inputChangeHandlerChecked(e, setData)}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                        {data.audio_enabled === true
                                            ?
                                            <>
                                                <label>Аудио-файл (mp3 или wav):</label>
                                                <FileInput
                                                    name="audio_name"
                                                    onChange={e => inputChangeHandler(e, setData)}
                                                    setState={setData}
                                                    placeholder={data.audio_name}
                                                />
                                            </>
                                            : null}
                                        <Button variant="contained" color="secondary" type="submit" style={{margin: '20px 0'}}>
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