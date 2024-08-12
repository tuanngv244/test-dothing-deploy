import React, { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  FormControl,
  FormHelperText,
  TextField,
  Checkbox,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Divider,
  styled,
  Theme,
  useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import Check from "@/@core/components/icons/Check";
import Checked from "@/@core/components/icons/Checked";
import Plus from "@/@core/components/icons/Plus";
import Minus from "@/@core/components/icons/Minus";
import { useDispatch } from "react-redux";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { requestContactUs } from "@/app/reducers/client";
import CardContactUs from "../cards/CardContactUs";
import DialogThank from "../modals/DialogThank";
import MuiContainer from "@/@core/style-libs/mui-container";
import ButtonSubmitSmall from "@/views/assets/components/button/ButtonSubmitSmall";
import contactUsMapper from "@/domains/mappers/support/mapper.contact";

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "2rem",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "0",
    marginTop: "2rem",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "64px",
  fontSize: "48px !important",
  fontWeight: 700,
  marginBottom: "0",
  marginTop: "1.1rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
    lineHeight: "50px",
    marginTop: ".1rem",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "32px !important",
    lineHeight: "32px",
    marginBottom: "1rem",
  },
}));

const DividerWrapper = styled(Divider)(({ theme }: { theme: any }) => ({
  marginTop: 80,
  marginBottom: 30,
  [theme.breakpoints.down("xl")]: {
    marginTop: 50,
    marginBottom: 0,
  },
  [theme.breakpoints.down("xlc")]: {
    marginTop: 35,
    marginBottom: 40,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  "input, textarea": {
    backgroundColor: "transparent !important",
  },
  textarea: {
    marginTop: "-3rem",
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: "3.5rem",
    svg: {
      width: 30,
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.2rem",
    marginLeft: "0",
    marginRight: "0",
    textarea: {
      marginTop: "-2rem",
    },
  },
}));

const HintWrapper = styled(Box)(({ theme }) => ({
  marginTop: "0.5rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "-0.4rem",
    ".MuiTypography-h6": {
      marginLeft: "2.6rem",
      lineHeight: 1,
      fontWeight: 700,
    },
  },
}));

const FormControlText = styled(FormControlLabel)(
  ({ theme }: { theme: any }) => ({
    marginLeft: "2rem",
    marginTop: "0",
    marginRight: 10,
    marginBottom: 5,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("xlc")]: {
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginLeft: 5,
      marginRight: 0,
      marginBottom: 0,
      textAlign: "left",
      svg: {
        width: 21,
        height: 21,
        marginRight: 15,
      },
      span: {
        padding: 0,
      },
    },
  })
);

const Hint = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "24px !important",
  lineHeight: "36px",
  fontWeight: 500,
  color: theme.palette.common.caption,

  [theme.breakpoints.down("xl")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    lineHeight: 1,
    fontWeight: 500,
  },
}));

const LabelInput = styled(Typography)(({ theme }) => ({
  fontSize: "24px !important",
  lineHeight: "60px",
  fontWeight: 500,
  color: "rgb(0 0 0 / 40%)",

  [theme.breakpoints.down("xl")]: {
    fontSize: "20px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    lineHeight: "21px",
    fontWeight: 500,
  },
}));

const InputStyle = styled(TextField)(({ theme }: { theme: any }) => ({
  label: {
    paddingLeft: "1.2rem",
  },
  "& .MuiInputBase-root": {
    fontSize: "24px",
    borderRadius: "5px",
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: theme.palette.background.bgHeader,
    fontWeight: 500,
    border: "none",
    height: "80px",
    boxShadow: "none",
    paddingLeft: "1.3rem",
    fieldset: {
      border: "1px solid rgb(0 102 255 / 50%)",
    },
  },
  ".MuiFormLabel-filled, .Mui-focused": {
    p: {
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    label: {
      paddingLeft: "0.5rem",
    },
    "& .MuiInputBase-root": {
      fontSize: "22px",
      height: "60px",
      paddingLeft: "1rem",
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    label: {
      paddingLeft: "0rem",
    },
    "& .MuiInputBase-root": {
      fontSize: "16px",
      height: "40px",
      paddingLeft: "0",
    },
  },
}));

const Textarea = styled(TextField)(({ theme }: { theme: any }) => ({
  label: {
    paddingLeft: "1.2rem",
  },
  "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
    fontSize: "24px",
    borderRadius: "5px",
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: theme.palette.background.bgHeader,
    fontWeight: 500,
    border: "none",
    boxShadow: "none",
    paddingLeft: "1.3rem",
    height: 247,
    fieldset: {
      border: "1px solid rgb(0 102 255 / 50%)",
    },
  },
  ".MuiFormLabel-filled, .Mui-focused": {
    p: {
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    label: {
      paddingLeft: "0.5rem",
    },
    "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
      fontSize: "22px",
      paddingLeft: "1rem",
      height: 230,
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    label: {
      paddingLeft: "0rem",
    },
    "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
      fontSize: "16px",
      paddingLeft: "0.5rem",
      height: 160,
    },
  },
}));

const BoxButton = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const IconPlus = styled(Plus)(({ theme }) => ({}));

const IconMinus = styled(Minus)(({ theme }) => ({}));

const MuiAccordion = styled(Accordion)(({ theme }: { theme: any }) => ({
  marginTop: 0,
  borderRadius: "0 !important",
  background: theme.palette.background.bgHeader,
  boxShadow: "none",
  "&:before": {
    height: 0,
  },
  "&.Mui-expanded": {
    boxShadow: "none",
    marginTop: "0 !important",
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: 15,
    "&.Mui-expanded": {
      marginTop: "15px !important",
    },
  },
  [theme.breakpoints.down("lg")]: {
    svg: {
      width: 26,
    },
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    "&.Mui-expanded": {
      marginTop: "10px !important",
      marginBottom: "10px !important",
    },
  },
}));

const Summary = styled(AccordionSummary)(({ theme }) => ({
  paddingTop: "0.8rem",
  paddingBottom: "0.8rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  borderRadius: "0",
  ".Mui-expanded": {
    margin: "10px 0 0 !important",
  },
  [theme.breakpoints.down("xl")]: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0.1rem",
    paddingBottom: "0.1rem",
    ".Mui-expanded": {
      margin: "0px 0 0 !important",
    },
    ".summary": {
      textAlign: "left",
    },
  },
}));

const Detail = styled(AccordionDetails)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    h4: {
      textAlign: "left",
    },
  },
}));

const defaultValues = {
  customerName: "",
  email: "",
  content: "",
  checkYn: false,
};

const LabelRequire = ({ name }: { name: string }) => {
  return (
    <LabelInput>
      {name} <span style={{ color: "rgb(239 68 68 / 40%)" }}>*</span>
    </LabelInput>
  );
};

type ContactProps = {
  page?: string,
  category?: string,
  apiData?: any,
  categories: Array<any>
}

const Contact = ({ page }: ContactProps, ref: any) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openTermOfUse, setOpenTermModal] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const {
    control,
    setError,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({ defaultValues })

  const dispatch = useDispatch()
  const theme = useTheme()

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const showModal = () => {
    setOpen(!open)
  }

  const toggleModalThank = () => {
    setOpen(!open)
  }

  const showErrors = (fields: any) => {
    return fields?.reduce(
      (obj: any, currentField: any) => ({
        ...obj,
        [currentField.field]: currentField.errorMsg
      }),
      {}
    )
  }

  const handleChange = (panel: any) => (event: any) => {
    setExpanded(!expanded)
  }

  const onSubmit = async (data: any) => {
    setLoading(true)
    const result = await dispatch(requestContactUs(data))
    const { isStatus, dataResponse } = contactUsMapper.mapToDto(result)

    if (!isStatus) {
      const objErrors: any = showErrors(dataResponse?.fieldErrors || [])

      for (let item in objErrors) {
        setError(item as any, {
          type: 'manual',
          message: objErrors[item]
        })
      }

      if (!dataResponse?.fieldErrors) {
        setError('email', {
          type: 'manual',
          message: dataResponse?.message
        })
      }
      
      setLoading(false)
      return
    }

    showModal()
    reset()
    setLoading(false)
  }

  return (
    <BoxWrapper ref={ref} width={WIDTH_MEDIUM}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Label variant={'h6'}>문의하기</Label>
        </Grid>
        <Grid item xs={12} sx={{ pt: '5px !important' }}>
          <Card sx={{ boxShadow: 'none', overflow: 'visible' }}>
            <Form component={'form'} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name='customerName'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <InputStyle
                          {...field}
                          size='small'
                          label={<LabelRequire name={'이름'} />}
                          error={Boolean(errors.customerName)}
                        />
                      )}
                    />
                    {errors.customerName && (
                      <FormHelperText sx={{ color: 'error.main', ml: '0' }}>
                        {errors.customerName.message || '이 필드는 필수입니다.'}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name='email'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <InputStyle
                          {...field}
                          size='small'
                          type='email'
                          label={<LabelRequire name={'이메일'} />}
                          error={Boolean(errors.email)}
                        />
                      )}
                    />
                    {errors.email && (
                      <FormHelperText sx={{ color: 'error.main', ml: '0' }}>
                        {errors.email.message || '이 필드는 필수입니다.'}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <Controller
                      name='content'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Textarea
                          {...field}
                          size='small'
                          multiline={true}
                          rows={5}
                          label={<LabelRequire name={'내용'} />}
                          error={Boolean(errors.content)}
                        />
                      )}
                    />
                    {errors.content && (
                      <FormHelperText sx={{ color: 'error.main', ml: '0' }}>
                        {errors.content.message || '이 필드는 필수입니다.'}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={8} sx={{ mt: 2 }}>
                  <HintWrapper sx={{ display: 'flex', alignItems: 'center' }}>
                    <FormControl>
                      <Controller
                        name='checkYn'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <FormControlText
                              label={<Hint>개인정보 수집 및 이용에 동의합니다. (필수)</Hint>}
                              control={
                                <Checkbox
                                  checked={field.value}
                                  onChange={e => setValue('checkYn', e.target.checked)}
                                  icon={<Check />}
                                  checkedIcon={<Checked />}
                                />
                              }
                            />
                          )
                        }}
                      />
                    </FormControl>
                  </HintWrapper>
                  {errors.checkYn && (
                    <FormHelperText sx={{ color: 'error.main', ml: '2.5rem', marginTop: 0, lineHeight: 1 }}>
                      {errors.checkYn.message || '이 필드는 필수입니다.'}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} md={4} sx={{ mt: 2 }}></Grid>
                <Grid item xs={12} md={12}>
                  <Accordion onChange={handleChange}>
                    <Summary expandIcon={expanded ? <IconMinus color={theme.palette.primary.main}/> : <IconPlus color={theme.palette.primary.main}/>}>
                      <Typography className='summary' variant='h5'>
                        WEB3ID 서비스 문의를 위한 {isMobile && <br />}
                        개인정보 수집ㆍ이용(필수)
                      </Typography>
                    </Summary>
                    <Detail>
                      <CardContactUs />
                    </Detail>
                  </Accordion>
                  <BoxButton sx={{ textAlign: 'center' }}>
                    <ButtonSubmitSmall
                      width={365}
                      height={64}
                      loading={loading}
                      submit={true}
                      size='large'
                      variant='contained'
                      color='primary'
                      name='제출'
                    />
                  </BoxButton>
                </Grid>
              </Grid>
            </Form>
          </Card>
        </Grid>
      </Grid>
      <DividerWrapper sx={{ borderColor: 'rgb(0 0 0 / 10%)' }} />
      <DialogThank toggle={toggleModalThank} open={open} />
    </BoxWrapper>
  )
};

export default forwardRef(Contact)
