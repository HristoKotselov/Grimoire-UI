import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "./navbar";
import React, {useEffect, useRef} from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CoolLightBox from './CoolLightBox';
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import ImageListItem from "@mui/material/ImageListItem";

import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
// import sanitizeHtml from 'sanitize-html';
import {Grid, Button, FormControl, InputLabel, Select, MenuItem, Card, CardActionArea, CardMedia, CardContent, Typography, Slide, TextField} from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel"
import {ModeEdit, Save} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images1 = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

function Content() {
    const [text, setText] = React.useState('# Hello Editor ' +
        '\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
        '\n' +
        '\n' +
        'Where does it come from?\n' +
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        '\n' +
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n' +
        '\n' +
        'Where can I get some?\n' +
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n' +
        '\n' +
        '5\n' +
        '\tparagraphs\n' +
        '\twords\n' +
        '\tbytes\n' +
        '\tlists\n' +
        '\tStart with \'Lorem\n' +
        'ipsum dolor sit amet...\'\n' +
        '\n');
    // const sanitize = (html: string) => sanitizeHtml(html);
    const [tags, setTags] = React.useState('Aynwell, pe6o, go6o ');
    const [data, setData] = React.useState<{ text: string; number: number }>({
        text: "",
        number: 0,
    });
    const [editText, setEditText] = React.useState(false);
    const [editTags, setEditTags] = React.useState(false);
    const [visibility, setVisibility] = React.useState("DM");

    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    // let preview = useRef(false);
    //
    // useEffect(() => {
    //     preview.current = !editText;
    //     setPreviewOnly(editText = !editText);
    // }, [editText]);

    const handleEditText = () => {
        setEditText(editText => !editText);
    }

    const saveText = () => {
        //TODO save text
        handleEditText();
    }

    const handleEditTags = () => {
        setEditTags(editTags => !editTags);
    }

    const saveTags = () => {
        //TODO save tags
        handleEditTags();
    }

    const handleVisibilityChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setVisibility(event.target.value);
    };

    return (
        <Grid container spacing={1} paddingLeft="20px" marginTop="70px"> {/* tags*/}1`````````````````````````````````````````````````````2
            <Grid xs={12} display="flex" alignItems="center">
                {/*<VisibilityMenu />*/}
                <FormControl style={{minWidth: 100}}>
                    <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={visibility}
                        label="Visibility"
                        onChange={handleVisibilityChange}
                    >
                        <MenuItem value={"DM"}>DM</MenuItem>
                        <MenuItem value={"Party"}>Party</MenuItem>
                        <MenuItem value={"Player"}>Faer</MenuItem>
                        <MenuItem value={"Gideon"}>Gideon</MenuItem>
                        <MenuItem value={"Nerama"}>Nerama</MenuItem>
                        <MenuItem value={"Althea"}>Althea</MenuItem>
                    </Select>
                </FormControl>
                {!editText && <Button startIcon={<ModeEdit />} onClick={() => handleEditText()}>
                    Edit<br/>Text
                </Button>}
                {editText && <Button startIcon={<Save />} onClick={() => saveText()}>
                    Save<br/>Text
                </Button>}
                {!editTags && <FormControlLabel control={<CheckBox icon={<ModeEdit />} checkedIcon={<ModeEdit />} onClick={() => handleEditTags()}
                                                     sx={{
                                                         color: grey[300],
                                                         '&.Mui-checked': {
                                                             color: grey[700],
                                                         },
                                                     }}/>} label="Edit tags:" />}
                {editTags && <FormControlLabel control={<CheckBox icon={<Save />} checkedIcon={<Save />} onClick={() => saveTags()}
                                                     sx={{
                                                         color: grey[300],
                                                         '&.Mui-checked': {
                                                             color: grey[700],
                                                         },
                                                     }}/>} label="Save tags:" />}

                {!editTags && <text>{tags}</text>}
                {editTags && <TextField
                    id="tags-value"
                    label="Tags"
                    value={tags}
                    helperText="Separate with comma"
                    variant="standard"
                />}
            </Grid>

            <Grid xs={12} display="flex" justifyContent="center"> {/* Left*/}
                <div className="markdown">
                    {/*<MDEditor data-color-mode="dark"*/}
                    {/*          preview="preview"*/}
                    {/*          value={data.text}*/}
                    {/*          onChange={(value) => setData({ ...data, text: value as string })}*/}
                    {/*          previewOptions={{*/}
                    {/*              rehypePlugins: [[rehypeSanitize]],*/}
                    {/*          }}*/}
                    {/*/>*/}
                    {editText && <MdEditor modelValue={text} onChange={setText} language="en-US" theme="dark" placeholder="# Heading 1..." previewTheme='github' preview={false} previewOnly={!editText} onSave={(v, h) => {
                        console.log(v);

                        h.then((html) => {
                            console.log(html);
                        });
                    }}/>}
                    {/*sanitize={sanitize}*/}
                    <MdEditor modelValue={text} onChange={setText} language="en-US" theme="dark" placeholder="# Heading 1..." previewTheme='github' previewOnly={true} />
                </div>
                <div className="short-info"> {/* Middle*/}
                    {/*<ReactImageGallery items={images1}/>*/}
                    <CoolLightBox/>
                    {/*<CoolLightBox/>*/}
                    <Grid item xs={12} textAlign="center" border={1.5} borderColor={grey[800]}> {/* short info*/}
                        <text><i>Tonka, you're a little fucking bitch, fuck off</i></text>
                    </Grid>
                    <div className="item-name"> {/* name */}
                        <text><b>Aynwell</b></text>
                    </div>
                    <Grid item xs={12} textAlign="center" border={1.5} borderColor={grey[800]}> {/* some shit*/}
                        <text>Fuck off</text>
                    </Grid>
                    <Grid container xs={12}> {/* some shit*/}
                        <Grid item xs={6} border={1.5} borderColor={grey[800]}> {/* some info*/}
                            <text>Fuck off</text>
                            <text>Fuck off</text>
                            <text>Fuck off</text>
                            <text>Fuck off</text>

                        </Grid>
                        <Grid item xs={6} border={1.5} borderColor={grey[800]}> {/* some info*/}
                            <text>Fuck off</text>
                        </Grid>
                    </Grid>
                </div>

                <div className="right-panel" > {/* Right*/}
                    <div className="slide-show"> {/* Recently viewed */}
                        <text><b>Recently viewed</b></text>
                    <Slider {...settings}>
                        {Array.from(Array(15)).map((_, index) => (
                            <div className="slide-card">
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image="https://fastly.picsum.photos/id/1018/1000/600.jpg?hmac=8y6PgnvgTLEEW-118lVn6V6zPUVSN9JSi27GSpmGpdQ"
                                            alt="green iguana"
                                        />
                                        <div>
                                            <Typography variant="subtitle1" component="div" fontSize="16px">
                                                Lizard {index}
                                            </Typography>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                    </div>
                    <div className="popular-pages"> {/* Popular pages */}
                        <text><b>Popular pages</b></text>
                    <Grid container xs={12}>
                        {Array.from(Array(9)).map((_, index) => (
                            <Grid container xs={4} padding={1} key={index}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image="https://fastly.picsum.photos/id/1018/1000/600.jpg?hmac=8y6PgnvgTLEEW-118lVn6V6zPUVSN9JSi27GSpmGpdQ"
                                            alt="green iguana"
                                        />
                                        <div>
                                            <Typography variant="h6" component="div">
                                                Lizard
                                            </Typography>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default Content;