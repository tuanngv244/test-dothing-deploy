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
  Stack,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import Check from "@/@core/components/icons/Check";
import Checked from "@/@core/components/icons/Checked";
import CheckedDot from "@/@core/components/icons/CheckedDot";
import UncheckDot from "@/@core/components/icons/UncheckDot";
import Plus from "@/@core/components/icons/Plus";
import Minus from "@/@core/components/icons/Minus";
import Users from "@/@core/components/icons/Users";
import PenEdit from "@/@core/components/icons/PenEdit";
import { useDispatch } from "react-redux";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { requestContactUs } from "@/app/reducers/client";
import MuiContainer from "@/@core/style-libs/mui-container";
import ButtonSubmitSmall from "@/views/assets/components/button/ButtonSubmitSmall";
import contactUsMapper from "@/domains/mappers/support/mapper.contact";
import BuildingMedium from "@/@core/components/icons/BuildingMedium";
import PhoneMedium from "@/@core/components/icons/PhoneMedium";
import TrainMedium from "@/@core/components/icons/TrainMedium";
import BusMedium from "@/@core/components/icons/BusMedium";

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "2rem",
  paddingBottom: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 15,
    paddingRight: 15
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "2rem",
  "input, textarea": {
    backgroundColor: "transparent !important",
    paddingLeft: 0,
  },
  textarea: {
    marginTop: "-1rem",
    height: "80px !important",
    position: "relative",
    top: "1rem",
    paddingLeft: 0,
  },
  [theme.breakpoints.down("xl")]: {
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
  marginTop: "0rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
  },
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
    marginLeft: "0",
    marginTop: "0",
    marginRight: 10,
    marginBottom: 0,

    [theme.breakpoints.down("xl")]: {},
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

const CheckboxStyle = styled(Checkbox)(({ theme }: { theme: any }) => ({
  paddingLeft: 0,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Hint = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "20px !important",
  lineHeight: "28px",
  fontWeight: 600,
  color: theme.palette.common.caption,

  span: {
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "18px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    lineHeight: 1,
    fontWeight: 500,
  },
}));

const LabelInput = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  lineHeight: "28px",
  fontWeight: 400,
  color: "#717171",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    lineHeight: "21px",
    fontWeight: 500,
  },
}));

const InputStyle = styled(TextField)(({ theme }: { theme: any }) => ({
  label: {
    paddingLeft: "0",
    marginLeft: '-15px'
  },
  "& .MuiInputBase-root": {
    fontSize: "18px",
    borderRadius: 0,
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: "#fff",
    fontWeight: 500,
    border: "none",
    height: "46px",
    boxShadow: "none",
    paddingLeft: "0",
    fieldset: {
      border: 0,
      borderBottom: "1px solid #89939E80",
    },
  },
  ".MuiFormLabel-filled, .Mui-focused": {
    p: {
      lineHeight: "28px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    label: {},
    "& .MuiInputBase-root": {},
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
    paddingLeft: "0",
    marginLeft: '-15px'
  },
  "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
    fontSize: "18px",
    borderRadius: 0,
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: "#fff",
    fontWeight: 500,
    border: "none",
    boxShadow: "none",
    paddingLeft: "0",
    height: 95,
    fieldset: {
      border: 0,
      borderBottom: "1px solid #89939E80",
    },
  },
  ".MuiFormLabel-filled, .Mui-focused": {
    p: {
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    label: {
      paddingLeft: "0",
    },
    "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
      paddingLeft: "0",
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
  marginTop: "0",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const BoxRight = styled(Box)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingLeft: "0rem",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingRight: "1rem",
    marginBottom: 0
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: 20
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LabelIcon = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  color: "#000",
  marginBottom: "1rem",
  paddingBottom: "0.5rem",
  borderBottom: "3px solid #EAEBEC",
  position: "relative",
  "&::before": {
    content: "''",
    display: "block",
    backgroundColor: theme.palette.primary.main,
    width: 72,
    height: 3,
    position: "absolute",
    bottom: "-3px",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "20px !important",
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardItem = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  fontWeight: 400,
  color: "#717171",
  marginBottom: "1rem !important",
  textAlign: 'left',
  span: {
    paddingLeft: "0.5rem",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "16px !important",
    lineHeight: "18px",
    marginBottom: "0.8rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: '0 !important'
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardLocation = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: 400,
  border: "1px solid #89939E80",
  marginTop: "0",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    height: 433,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const defaultValues = {
  customerName: "",
  customerName1: "",
  customerName2: "",
  email: "",
  content: "",
  checkYn: false,
};

const LabelRequire = ({ name }: { name: string }) => {
  return <LabelInput>{name}</LabelInput>;
};

type ContactProps = {
  page?: string;
  category?: string;
  apiData?: any;
  categories: Array<any>;
};

const ContactUsV2Page = ({ page }: ContactProps, ref: any) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const {
    control,
    setError,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useDispatch();
  const theme = useTheme();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const showModal = () => {
    setOpen(!open);
  };

  const toggleModalThank = () => {
    setOpen(!open);
  };

  const showErrors = (fields: any) => {
    return fields?.reduce(
      (obj: any, currentField: any) => ({
        ...obj,
        [currentField.field]: currentField.errorMsg,
      }),
      {}
    );
  };

  const handleChange = (panel: any) => (event: any) => {
    setExpanded(!expanded);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const result = await dispatch(requestContactUs(data));
    const { isStatus, dataResponse } = contactUsMapper.mapToDto(result);

    if (!isStatus) {
      const objErrors: any = showErrors(dataResponse?.fieldErrors || []);

      for (let item in objErrors) {
        setError(item as any, {
          type: "manual",
          message: objErrors[item],
        });
      }

      if (!dataResponse?.fieldErrors) {
        setError("email", {
          type: "manual",
          message: dataResponse?.message,
        });
      }

      setLoading(false);
      return;
    }

    showModal();
    reset();
    setLoading(false);
  };

  return (
    <BoxWrapper ref={ref} width={WIDTH_MEDIUM}>
      <Grid container>
        <Grid item xs={12}>
          <LabelIcon>
            <span>문의하기</span>
          </LabelIcon>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            spacing={4}
            alignItems={"start"}
            justifyContent={"space-between"}
          >
            <CardItem>
              <BuildingMedium />
              <span>
                [14348]경기도 광명시 새빛공원로 67 <br />
                광명역자이타워 B동 510호
              </span>
            </CardItem>
            <CardItem>
              <PhoneMedium />
              <span>
                02 - 851 - 9908 <br />
                02 - 851 - 9909
              </span>
            </CardItem>
            <CardItem>
              <TrainMedium />
              <span>
                광명역 5번 출구 도 <br />보 3분 (580m)
              </span>
            </CardItem>
            <CardItem>
              <BusMedium />
              <span>
                광명역 (도보 3분) <br />
                일반 버스 : 3번, 77A번, 77B번, 75번, 8-2번 <br />
                간선 버스 : 505번, 500번, 507번 <br />
                지선 버스 : 5627번, 5633번, 5531번, 5623번, 5530번 <br />
                직행 버스 : 8507번, 3001번, 3002번, 5609번 <br />
                공항 버스 : 6004번, 6014번, 6770번
              </span>
            </CardItem>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ pt: "1rem !important" }}>
          <Card sx={{ boxShadow: "none", overflow: "visible" }}>
            <Form component={"form"} onSubmit={handleSubmit(onSubmit)}>
              <Grid container columnSpacing={{ sm: 5, md: 12 }}>
                <Grid item xs={12} md={6}>
                  <LabelIcon>
                    <span>의뢰인 정보</span>
                  </LabelIcon>
                  <StackStyle display={"flex"} flexDirection={"column"} spacing={5}>
                    <FormControl fullWidth>
                      <Controller
                        name="customerName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={<LabelRequire name={"이름"} />}
                            error={Boolean(errors.customerName)}
                          />
                        )}
                      />
                      {errors.customerName && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.customerName.message ||
                            "이 필드는 필수입니다."}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            type="email"
                            label={
                              <LabelRequire
                                name={"이메일 (example@example.com)"}
                              />
                            }
                            error={Boolean(errors.email)}
                          />
                        )}
                      />
                      {errors.email && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.email.message || "이 필드는 필수입니다."}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="customerName1"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={<LabelRequire name={"회사 이름"} />}
                            error={Boolean(errors.customerName1)}
                          />
                        )}
                      />
                      {errors.customerName1 && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.customerName1.message ||
                            "이 필드는 필수입니다."}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="customerName2"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={<LabelRequire name={"전화 번호"} />}
                            error={Boolean(errors.customerName2)}
                          />
                        )}
                      />
                      {errors.customerName2 && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.customerName2.message ||
                            "이 필드는 필수입니다."}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="content"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Textarea
                            {...field}
                            size="small"
                            multiline={true}
                            rows={5}
                            label={<LabelRequire name={"콘텐츠 가져오기"} />}
                            error={Boolean(errors.content)}
                          />
                        )}
                      />
                      {errors.content && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.content.message || "이 필드는 필수입니다."}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <Stack
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"start"}
                      sx={{ marginTop: "1rem" }}
                    >
                      <Box>
                        <HintWrapper
                          sx={{ display: "flex", alignItems: "start", flexDirection: 'column' }}
                        >
                          <FormControl>
                            <Controller
                              name="checkYn"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => {
                                return (
                                  <FormControlText
                                    label={
                                      <Hint>
                                        <span>개인정보취급방침에</span>{" "}
                                        동의합니다.
                                      </Hint>
                                    }
                                    control={
                                      <CheckboxStyle
                                        checked={field.value}
                                        onChange={(e) =>
                                          setValue("checkYn", e.target.checked)
                                        }
                                        icon={<UncheckDot />}
                                        checkedIcon={<CheckedDot />}
                                      />
                                    }
                                  />
                                );
                              }}
                            />
                          </FormControl>
                          {errors.checkYn && (
                            <FormHelperText
                              sx={{
                                color: "error.main",
                                ml: "0rem",
                                marginTop: 0,
                                lineHeight: 2,
                              }}
                            >
                              {errors.checkYn.message ||
                                "이 필드는 필수입니다."}
                            </FormHelperText>
                          )}
                        </HintWrapper>
                      </Box>
                      <BoxButton sx={{ textAlign: "center" }}>
                        <ButtonSubmitSmall
                          width={150}
                          height={56}
                          loading={loading}
                          submit={true}
                          size="large"
                          variant="contained"
                          color="primary"
                          name="문의하기"
                        />
                      </BoxButton>
                    </Stack>
                  </StackStyle>
                </Grid>
                <Grid item xs={12} md={6}>
                  <BoxRight>
                    <LabelIcon>
                      <span>우리 위치</span>
                    </LabelIcon>
                    <CardLocation
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7635986532614!2d106.67901427553365!3d10.7526940893946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa5cfec5945%3A0xd161a90aea9620c0!2sMH-building!5e0!3m2!1sen!2s!4v1672199844781!5m2!1sen!2s"
                      loading="lazy"
                    ></CardLocation>
                  </BoxRight>
                </Grid>
              </Grid>
            </Form>
          </Card>
        </Grid>
      </Grid>
    </BoxWrapper>
  );
};

export default forwardRef(ContactUsV2Page);
