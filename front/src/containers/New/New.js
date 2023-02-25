import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import {
    inputChangeHandler,
    inputChangeHandlerChecked,
    submitFormDataHandler,
    submitFormHandler
} from "../../components/UI/Form/Handlers/Handlers";
import {createDataRequest} from "../../store/actions/dataActions";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import ButtonsContent from "../../components/UI/ButtonsContent/ButtonsContent";
import FormCheck from "../../components/UI/Form/FormCheck/FormCheck";

const New = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        status: 'order_creation',
        stage: 'results_confirmed',
        link: '',
        request_type: 'video_auto',
        quote_enabled: false,
        audio_enabled: false,
        quote_text: '',
        quote_author_text: '',
        audio_file: '',
        foreground_file: '',
        background_file: '',
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
                                onSubmit={e => submitFormHandler(e, dispatch(createDataRequest(submitFormDataHandler(data))))}
                                  style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '30px'}}
                            >
                                <div style={{width: '50%', padding: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <FormInput
                                        required={true}
                                        type="text"
                                        placeholder="Вставьте ссылку"
                                        name="link"
                                        value={data.link}
                                        onChange={e => inputChangeHandler(e, setData)}
                                    />
                                </div>

                                <div style={{width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                                    <Button
                                        variant="outlined"
                                        type="button"
                                        color="secondary"
                                        style={{width: '30%'}}
                                        onClick={() => inputChangeHandlerChecked({target: {name: 'quote_enabled', checked: !data.quote_enabled}}, setData)}
                                    >
                                        Цитата
                                        <FormCheck
                                                checked={data.quote_enabled}
                                                name="quote_enabled"
                                                onChange={e => inputChangeHandlerChecked(e, setData)}
                                        />
                                    </Button>

                                    {data.quote_enabled === true
                                        ?
                                        <>
                                            <FormInput
                                                placeholder='Здесь будет цитата'
                                                multiline
                                                name="quote_text"
                                                value={data.quote_text}
                                                onChange={e => inputChangeHandler(e, setData)}
                                            />
                                                <FormInput
                                                placeholder="Здесь автор"
                                                onChange={e => inputChangeHandler(e, setData)}
                                                name="quote_author_text"
                                                value={data.quote_author_text}
                                                type="text"
                                            />
                                        </>
                                        : null
                                    }

                                    <Button
                                        variant="outlined"
                                        type="button"
                                        color="secondary"
                                        style={{width: '30%'}}
                                        onClick={() => inputChangeHandlerChecked({target: {name: 'audio_enabled', checked: !data.audio_enabled}}, setData)}
                                    >
                                        Аудио
                                        <FormCheck
                                            checked={data.audio_enabled}
                                            name="audio_enabled"
                                            onChange={e => inputChangeHandlerChecked(e, setData)}
                                        />
                                    </Button>

                                    {data.audio_enabled === true
                                        ? <FileInput
                                            name="audio_file"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            placeholder={data.audio_file}
                                            value={data.audio_file}
                                          />
                                        : null}
                                </div>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            type="submit"
                                            style={{margin: '20px 0', position: 'fixed', bottom: '0', left: '0'}}
                                        >
                                            Оформить заказ
                                        </Button>
                            </form>
                        </Grid>
                    }

                    childrenTwo={
                        <Grid container direction="column" spacing={1} alignItems="center">
                            <form style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '30px'}}
                                onSubmit={e => submitFormHandler(e, data, dispatch(createDataRequest(submitFormDataHandler({...data}))))}
                            >
                                <div style={{width: '50%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                    <label style={{paddingBottom: '50px'}}>
                                        Основной документ / изображение:
                                        <FileInput
                                            required={true}
                                            name="foreground_file"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            placeholder={data.foreground_file}
                                            value={data.foreground_file}
                                        />
                                    </label>
                                    <label>Документ / изображение для заднего плана:
                                        <FileInput
                                            name="background_file"
                                            onChange={e => inputChangeHandler(e, setData)}
                                            placeholder={data.background_file}
                                            value={data.background_file}
                                        />
                                    </label>
                                </div>
                                <div style={{width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                                    <Button
                                        variant="outlined"
                                        type="button"
                                        color="secondary"
                                        style={{width: '30%'}}
                                        onClick={() => inputChangeHandlerChecked({target: {name: 'quote_enabled', checked: !data.quote_enabled}}, setData)}
                                    >
                                        Цитата
                                        <FormCheck
                                            checked={data.quote_enabled}
                                            name="quote_enabled"
                                            onChange={e => inputChangeHandlerChecked(e, setData)}
                                        />
                                    </Button>
                                    {data.quote_enabled === true
                                        ?
                                        <>
                                            <FormInput
                                                placeholder='Здесь будет цитата'
                                                multiline
                                                name="quote_text"
                                                value={data.quote_text}
                                                onChange={e => inputChangeHandler(e, setData)}
                                            />
                                            <FormInput
                                                placeholder="Здесь автор"
                                                onChange={e => inputChangeHandler(e, setData)}
                                                name="quote_author_text"
                                                value={data.quote_author_text}
                                                type="text"
                                            />
                                        </>
                                        : null
                                    }

                                    <Button
                                        variant="outlined"
                                        type="button"
                                        color="secondary"
                                        style={{width: '30%'}}
                                        onClick={() => inputChangeHandlerChecked({target: {name: 'audio_enabled', checked: !data.audio_enabled}}, setData)}
                                    >
                                        Аудио
                                        <FormCheck
                                            checked={data.audio_enabled}
                                            name="audio_enabled"
                                            onChange={e => inputChangeHandlerChecked(e, setData)}
                                        />
                                    </Button>

                                    {data.audio_enabled === true
                                        ?
                                        <>
                                            <label style={{paddingBottom: '50px'}}
                                            >Аудио-файл (mp3 или wav):
                                                <FileInput
                                                    name="audio_file"
                                                    onChange={e => inputChangeHandler(e, setData)}
                                                    placeholder={data.audio_file}
                                                    value={data.audio_file}
                                                />
                                            </label>
                                        </>
                                        : null}
                                </div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    style={{margin: '20px 0', position: 'fixed', bottom: '0', left: '0'}}
                                >
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