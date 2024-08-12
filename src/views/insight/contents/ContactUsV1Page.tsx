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
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "60px",
  paddingBottom: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "28px !important",
  fontWeight: 700,
  marginBottom: "0",
  marginTop: "0",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px !important",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "23px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "20px !important",
  },
}));

const SubLabel = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  fontWeight: 400,
  marginBottom: "0",
  marginTop: "0",
  lineHeight: 1,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "17px !important",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "18px !important",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  "input, textarea": {
    backgroundColor: "transparent !important",
  },
  textarea: {
    marginTop: "-3rem",
    height: "190px !important",
    position: "relative",
    top: "2rem",
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
    fontWeight: 700,
  },
}));

const LabelInput = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  lineHeight: "38px",
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
    paddingLeft: "0.5rem",
  },
  "& .MuiInputBase-root": {
    fontSize: "18px",
    borderRadius: 10,
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: "#fff",
    fontWeight: 500,
    border: "none",
    height: "56px",
    boxShadow: "none",
    paddingLeft: "1rem",
    fieldset: {
      border: "1px solid #89939E80",
    },
  },
  ".MuiFormLabel-filled, .Mui-focused": {
    p: {
      lineHeight: "28px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    label: {
      paddingLeft: "0.5rem",
    },
    "& .MuiInputBase-root": {
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
    paddingLeft: "0.5rem",
  },
  "& .MuiInputBase-root, & .MuiInputBase-inputMultiline": {
    fontSize: "18px",
    borderRadius: 10,
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: "#fff",
    fontWeight: 500,
    border: "none",
    boxShadow: "none",
    paddingLeft: "1rem",
    height: 208,
    fieldset: {
      border: "1px solid #89939E80",
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
      paddingLeft: "1rem",
      height: 200,
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

const BoxAction = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "1.2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const BoxButton = styled(Box)(({ theme }) => ({
  marginTop: "0",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginTop: "20px",
  },
}));

const BoxRight = styled(Box)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingLeft: "2.3rem",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingTop: "2rem !important",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "30px",
  },
}));

const LabelIcon = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  color: "#000",
  marginBottom: "0.8rem",
  span: {
    paddingLeft: "0.5rem",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "20px !important",
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const defaultValues = {
  name: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  message: "",
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

const ContactUsV1Page = ({ page }: ContactProps, ref: any) => {
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
  } = useForm<{
    delFlag: boolean;
    name: string;
    email: string;
    companyName: string;
    phoneNumber: string;
    message: string;
    checkYn: boolean;
  }>({ defaultValues });

  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();

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

    toast.success(t("COMMON.youHaveSentContactSuccessfully"));

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
          <Label variant={"h6"}>{t("CONTACT_PAGE.sendUsYourInquiry")}</Label>
          <SubLabel>
            {t("CONTACT_PAGE.weWillRespondAsQuicklyAsPossible")}
          </SubLabel>
        </Grid>
        <GridStyle item xs={12}>
          <Card sx={{ boxShadow: "none", overflow: "visible" }}>
            <Form component={"form"} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <LabelIcon>
                    <Users />
                    <span>{t("CONTACT_PAGE.yourInformation")}</span>
                  </LabelIcon>
                  <Stack display={"flex"} flexDirection={"column"} spacing={5}>
                    <FormControl fullWidth>
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={
                              <LabelRequire name={t("CONTACT_PAGE.name")} />
                            }
                            error={Boolean(errors.name)}
                          />
                        )}
                      />
                      {errors.name && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.name.message ||
                            t("CONTACT_PAGE.thisFieldIsRequired")}
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
                                name={t("CONTACT_PAGE.emailExample")}
                              />
                            }
                            error={Boolean(errors.email)}
                          />
                        )}
                      />
                      {errors.email && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.email.message ||
                            t("CONTACT_PAGE.thisFieldIsRequired")}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="companyName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={
                              <LabelRequire
                                name={t("CONTACT_PAGE.companyName")}
                              />
                            }
                            error={Boolean(errors.companyName)}
                          />
                        )}
                      />
                      {errors.companyName && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.companyName.message ||
                            t("CONTACT_PAGE.thisFieldIsRequired")}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl fullWidth>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <InputStyle
                            {...field}
                            size="small"
                            label={
                              <LabelRequire
                                name={t("CONTACT_PAGE.phoneNumber")}
                              />
                            }
                            error={Boolean(errors.phoneNumber)}
                          />
                        )}
                      />
                      {errors.phoneNumber && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.phoneNumber.message ||
                            t("CONTACT_PAGE.thisFieldIsRequired")}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8}>
                  <BoxRight>
                    <LabelIcon>
                      <PenEdit color="#007828" />
                      <span>{t("CONTACT_PAGE.detailRequest")}</span>
                    </LabelIcon>
                    <FormControl fullWidth>
                      <Controller
                        name="message"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Textarea
                            {...field}
                            size="small"
                            multiline={true}
                            rows={5}
                            label={
                              <LabelRequire
                                name={t("CONTACT_PAGE.pleaseEnterYourInquiry")}
                              />
                            }
                            error={Boolean(errors.message)}
                          />
                        )}
                      />
                      {errors.message && (
                        <FormHelperText sx={{ color: "error.main", ml: "0" }}>
                          {errors.message.message ||
                            t("CONTACT_PAGE.thisFieldIsRequired")}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <BoxAction>
                      <Box>
                        <HintWrapper
                          sx={{ display: "flex", alignItems: "center" }}
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
                                        <Box
                                          component={"div"}
                                          dangerouslySetInnerHTML={{
                                            __html: t(
                                              "CONTACT_PAGE.iAgreeToThePrivacyPolicy"
                                            ),
                                          }}
                                        />
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
                        </HintWrapper>
                        {errors.checkYn && (
                          <FormHelperText
                            sx={{
                              color: "error.main",
                              ml: "2.5rem",
                              marginTop: 0,
                              lineHeight: 1,
                            }}
                          >
                            {errors.checkYn.message ||
                              t("CONTACT_PAGE.thisFieldIsRequired")}
                          </FormHelperText>
                        )}
                      </Box>
                      <BoxButton sx={{ textAlign: "center" }}>
                        <ButtonSubmitSmall
                          width={250}
                          height={56}
                          loading={loading}
                          submit={true}
                          size="large"
                          variant="contained"
                          color="primary"
                          name={t("COMMON.submit")}
                        />
                      </BoxButton>
                    </BoxAction>
                  </BoxRight>
                </Grid>
              </Grid>
            </Form>
          </Card>
        </GridStyle>
      </Grid>
    </BoxWrapper>
  );
};

export default forwardRef(ContactUsV1Page);
