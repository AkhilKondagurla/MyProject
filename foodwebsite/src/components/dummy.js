import React, { useEffect, useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Modal, Row, Col, Breadcrumb, Table, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
import { MultiStepForm, MultiStep, Step } from "react-multi-form";
import styles2 from "../../../styles/Users.module.scss";
import styles from "../../../styles/Appointments.module.scss";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import Logo from '../../../public/images/image472.jpg'
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog'
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";
import Axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { EDIT_DOCTOR_DETAILS, DELETE_DOCUMENT_IMAGE, DELETE_VERIFICATION_IMAGES } from "../../../graphql/mutations"
import { GET_DOCTOR_DETAILS } from "../../../graphql/queries"
import { from, useMutation } from "@apollo/client";
import moment from "moment";
import SuccessMessage, { showMessage, toast } from '../../alertmessages/Alertmessages';
import { removeDomElementsFromInput } from '../../../utils/domSanitizer'
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('../CkEditor'), {
    ssr: false,
    loadableGenerated: {
        modules: ['../CkEditor']
    }
});

const EditDoctor_Modal = (props) => {
    const {
        showModal,
        setShowModal,
        DoctorDetials,
        form,
        setForm,
        searchItemValue,
        close,
        FinalAmount,
        setFinalAmount,
        setMUpdate,
        setAUpdate,
        Addition,
        mupdate,
        SetDisablevalue,
        disableValue,
        tablePagination,
        pageId,
        refetch
    } = props


    const [consultationfeeChecked, setConsultationfeeChecked] = useState(false);
    const [clinicCareChecked, setClinicareChecked] = useState(false);
    const [moreImages, setMoreImages] = useState([])
    const [SuccessMes, setSuccessMes] = useState(false)
    const [SuccessMesforUpdate, setSuccessMesforUpdate] = useState(false)
    const [count, setCount] = useState(0);

    const [showPreview, setShowPreview] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowPreview(true);
    };

    const handleClosePreview = () => setShowPreview(false);

    let userLevelData = "";
    if (typeof window !== 'undefined') {
        userLevelData = JSON.parse(secureLocalStorage.getItem("user"));
    }
    const GlobalUserName = (userLevelData && userLevelData.length > 0) ? userLevelData[0].username : "";
    // console.log("DoctorDetials", form)
    const [updateDoctordetails] = useMutation(EDIT_DOCTOR_DETAILS)
    const [deleteDocumentImage] = useMutation(DELETE_DOCUMENT_IMAGE)
    const [deleteVerificationImage] = useMutation(DELETE_VERIFICATION_IMAGES)

    const removeHTMLTags = (str) => {
        return str ? str.replace(/<\/?[^>]+(>|$)/g, "") : '';
    };


    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const Facility = form.clinichospital ? form.clinichospital.facility : "";
    const ClinicData = form.clinichospital ? form.clinichospital.clinichospital : "";
    const ClinicLocation = form.clinichospital ? form.clinichospital.location : "";
    const ClinicTimeings = form.clinichospital ? form.clinichospital.clinic_timings : "";
    const ConsultationTimeings = form.clinichospital ? form.clinichospital.consultation_timings : "";
    const ClinicContactNumber = form.clinichospital ? form.clinichospital.cliniccontactnumber : "";
    const TagsData = form.Tags ? form.Tags.tag : "";
    const AdditionalInformation = form.AdditionalInformation ? form.AdditionalInformation.information : "";
    const servicesAndProceduresData = form.ServicesAndProcedure ? form.ServicesAndProcedure.data : "";
    const AboutDoctor = form.AboutDoctor ? form.AboutDoctor.about : "";
    const ClinicInformation = form.ClinicInformation ? form.ClinicInformation.information : "";

    // Services Data

    // const FixedAmout = form.DoctorServicesData ? form.DoctorServicesData[0].TotalPrice : 0;
    const FixedAmout = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].TotalPrice : 0
    const ServiceNames = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].ServiceName : "";
    const ServiceId = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].ServiceId : "";
    const RadioType = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].Type : 0;
    const discount = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].discount : 0;
    const fee = form.DoctorServicesData && form.DoctorServicesData.length > 0 ? form.DoctorServicesData[0].Fee : 0;

    const formattedTime1 = moment(ConsultationTimeings, 'HH:mm').format('HH:mm');
    const formattedTime2 = moment(ClinicTimeings, 'HH:mm').format('HH:mm');

    //prrofs 
    const ProofType = form?.proofs?.EstimatedProof?.[0]?.type;

    //Random ID Genration
    const generateRandomSampleID = () => {
        const characters = "abcdefghijklmnopqrstuvwxyz_1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < 30; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };



    const handleMUpdateChange = (e) => {
        const { name, value } = e.target;
        let arr = form.DoctorServicesData.map((each, index) => {
            return {
                ...each,
                [name]: value ? 1 : ''
            }
        })
        setForm({
            ...form,
            DoctorServicesData: arr,
            Fee: 0
        })
        setMUpdate(true);
        setAUpdate(false)
        setFinalAmount(0)
    };

    const handleAUpdateChange = (e) => {
        const { name, value } = e.target;
        let arr = form.DoctorServicesData.map((each, index) => {
            return {
                ...each,
                [name]: value ? 2 : ''
            }
        })
        setForm({
            ...form,
            DoctorServicesData: arr,
        })
        setAUpdate(true)
        setMUpdate(false)
        setFinalAmount(0)
    }

    const handleChangeEnterAmount = (e) => {
        const { name, value } = e.target;
        let finalAmount = 0;
        if (name === "discount" && value) {
            const amount = parseInt(FixedAmout);
            const percentage = parseInt(value.replace('%', ''));
            const discount = amount * (percentage / 100);
            finalAmount = amount - discount;
        } else if (name === "fee" && value) {
            const amount = parseInt(FixedAmout);
            const fee = parseInt(value);
            finalAmount = amount + fee;
        }

        setFinalAmount(finalAmount || 0);

        const arr = form.DoctorServicesData.map((each, index) => {
            return {
                ...each,
                Fee: name == "discount" ? 0 : parseInt(value),
                discount: name == "discount" ? parseInt(value) : 0,
                TotalAmount: finalAmount || 0
            };
        });
        setForm({
            ...form,
            DoctorServicesData: arr,
        });
    };


    const handleCheckboxChange = (e, name) => {
        const value = name === "ownfacility" ? 1 : 2
        const FacilityCheckedValue = {
            ...form.clinichospital,
            updateid: form.clinichospital ? form.clinichospital.updateid : 0,
            facility: value
        }
        setForm({
            ...form,
            clinichospital: FacilityCheckedValue
        })
    };

    const handleInit = (value, editor) => {
        setCount(charCount(editor));
    };

    const handleEditorChange = (content, editor) => {
        const value = editor.getData()
        const ServiceProce = {
            ...form.ServicesAndProcedure,
            updateid: form.ServicesAndProcedure ? form.ServicesAndProcedure.updateid : 0,
            data: value,
        };
        setForm({ ...form, ServicesAndProcedure: ServiceProce });
    };

    const handleChangeClinichospitalChange = (e, name) => {
        const { value } = e.target;
        const ClinicDetails = {
            ...form.clinichospital,
            [name]: value
        }
        setForm({
            ...form,
            clinichospital: ClinicDetails
        })

    }

    const handleTagschanges = (e, name) => {
        // const { value } = e.target;
        const value = removeDomElementsFromInput(e.target.value);
        const TagsData = {
            ...form.Tags,
            updateid: form.Tags ? form.Tags.updateid : 0,
            [name]: value
        }
        setForm({
            ...form,
            Tags: TagsData
        })

    }

    const handleAditionalInformation = (e, name) => {
        // const { value } = e.target;
        const value = removeDomElementsFromInput(e.target.value);
        const additionalinformation = {
            ...form.AdditionalInformation,
            updateid: form.AdditionalInformation ? form.AdditionalInformation.updateid : 0,
            [name]: value,
        }
        setForm({
            ...form,
            AdditionalInformation: additionalinformation
        })

    }

    const handleDoctorDetailsChange = (e, name) => {
        // const { value } = e.target;
        const value = removeDomElementsFromInput(e.target.value);
        const DocData = {
            ...form.AboutDoctor,
            updateid: form.AboutDoctor ? form.AboutDoctor.updateid : 0,
            [name]: value,
        };
        setForm({
            ...form,
            AboutDoctor: DocData
        })
    }
    const handleClinicInfoDetailsChange = (e, name) => {
        const value = removeDomElementsFromInput(e.target.value);
        const clinicData = {
            ...form.ClinicInformation,
            updateid: form.ClinicInformation ? form.ClinicInformation.updateid : 0,
            // username: form.ClinicInformation ? form.ClinicInformation.username: "",
            [name]: value,
            
        };
        setForm({
            ...form,
            ClinicInformation: clinicData
        })
    }

    const handleChange = (e) => {
        const { name } = e.target;
        const value = removeDomElementsFromInput(e.target.value);
        setForm({
            ...form,
            [name]: value
        })

    }


    const fileUpload = async (file, stream) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_VIEW_FILE}/mobile_pharmacy.php?uploadImage=true`;

            const formData = new FormData();
            formData.append("file", file);
            const response = await Axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return response.data;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    };

    const handleChangeImageChange = (e, upidx) => {
        const name = e.target.name;
        if (name === "image") {
            let files = e.target.files;
            let err = "";
            const types = ["image/png", "image/jpeg", "image/jpg"];

            for (var x = 0; x < files.length; x++) {
                if (types.every(type => files[x].type !== type)) {
                    err += "Uploaded file is not a valid format. Only JPG, PNG files are allowed.";
                }
                else if (types.every(type => files[x].size > 10e6)) {
                    err += "Please upload a file smaller than 10 MB";
                }
            }

            if (err !== "") {
                setForm({
                    ...form,
                    error: err
                });
            } else {
                const file = e.target.files[0];
                const fileread = new FileReader();

                fileread.onload = async (e) => {
                    let fobj = {
                        stream: e.target.result,
                        filename: file.name,
                        mimetype: file.type,
                    };
                    const upload = await fileUpload(file, fobj.stream);
                    if (upload.result === "success") {
                        setForm({
                            ...form,
                            GalleryData: [...form.GalleryData, {
                                id: 0,
                                images: upload.filename ? `${process.env.NEXT_PUBLIC_VIEW_FILE}/files1/${upload.filename}` : "",
                                username: GlobalUserName
                            }],
                            error: "",
                        });
                    } else {
                        let errorMessage = "Something went wrong. Please try again.";
                        if (upload.data && upload.data.error) {
                            errorMessage = upload.data.error;
                        }

                        setForm({
                            ...form,
                            error: errorMessage,
                        });
                    }
                };

                if (!file) {
                    setForm({
                        ...form,
                        error: "Please select an image",
                    });
                } else {
                    fileread.readAsDataURL(file);
                }
            }
        }
    };

    const [proofUpload, setProofsUpload] = useState([])
    // GALLERY IMAGE ADD MORE


    useEffect(() => {
        if (moreImages && moreImages.length === 0) {
            setMoreImages([{ images: "" }])
        }
    }, [])
    const AddmoreGallery = () => {
        setMoreImages([...moreImages, { images: "" }]);

    }

    const RemoveMoreGallery = (indexToRemove) => {
        if (indexToRemove === 0) return;
        setMoreImages(moreImages.filter((_, index) => index !== indexToRemove));
    };


    // IDENTITY Prrof ADD MORE
    const checkdraftuploads = form.proofs ? form.proofs.filter((each) => each.default == false) : []
    const checkdraftuploadsCheck = checkdraftuploads && checkdraftuploads.length ? true : false

    if (!checkdraftuploadsCheck) {
        setForm({
            ...form,
            proofs: [
                ...(form.proofs || []),
                { type: 0, file: "", ranid: generateRandomSampleID(), default: false }
            ]
        });
    }

    // Function to add more identity proofs
    const AddMoreIdentityProof = () => {
        setForm({
            ...form,
            proofs: [
                ...form.proofs,
                { type: 0, file: "", ranid: generateRandomSampleID(), default: false }
            ]
        });
    };

    const RemoveUploadefile = async (idx, delId) => {
        if (delId) {
            try {
                const { data } = await deleteVerificationImage({
                    variables: {
                        deleteVerificationId: delId,
                    }
                })
                setForm({
                    ...form,
                    proofs: form.proofs.filter(del => del.id !== delId)
                });
                showMessage("Successfully  deleted Image", "error", toast);
                setTimeout(() => {
                    setSuccessMes(false)
                }, 3000)
            } catch (error) {
                console.log(error)
            }
        } else if (idx) {
            if (idx < 0 || idx >= form.proofs.length) return;
            setForm((prevForm) => ({
                ...prevForm,
                proofs: prevForm.proofs.filter((_, index) => index !== idx)
            }));
        }
    };


    const RemoveImage = async (imageId, index) => {
        try {
            const { data } = await deleteDocumentImage({
                variables: {
                    deletedocImagesId: imageId,
                },
            })
            setForm({
                ...form,
                GalleryData: form.GalleryData.filter(del => del.id !== imageId)
            });
            showMessage("Successfully  deleted Image", "error", toast);

            setTimeout(() => {
                setSuccessMes(false)
            }, 3000)
        } catch (error) {
            console.log(error)
        }


    };

    const handleInputProofUpload = (e, index, rid) => {
        const { value, name } = event.target

        if (name === "type") {
            let arr = form.proofs.map((each, idx) => {
                if (each.ranid === rid) {
                    return {
                        ...each,
                        id: 0,
                        [name]: parseInt(value)
                    }
                } return each
            })
            setForm({
                ...form,
                proofs: arr
            })
        } else if (name === "file") {
            const { files } = event.target
            const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
            const maxSize = 10 * 1024 * 1024; // 10 MB

            const errors = Array.from(files).reduce((acc, file) => {
                if (!allowedTypes.includes(file.type)) {
                    acc.push("Uploaded file is not a valid format. Only JPG, PNG files are allowed.");
                }
                if (file.size > maxSize) {
                    acc.push("Please upload a file smaller than 10 MB");
                }
                return acc;
            }, []);
            if (errors.length > 0) {
                setForm({
                    ...form,
                    error: errors[0],
                });
                return;
            }
            const file = files[0];
            const reader = new FileReader();
            reader.onload = async (event) => {
                const fileData = {
                    stream: event.target.result,
                    filename: file.name,
                    mimetype: file.type,
                };
                try {
                    const uploadResult = await fileUpload(file, fileData.stream);
                    if (uploadResult.result === "success") {
                        const uploadedFilePath = `${process.env.NEXT_PUBLIC_VIEW_FILE}/files1/${uploadResult.filename}`;

                        let arr = form.proofs.map((each, idx) => {
                            if (each.ranid === rid) {
                                return {
                                    ...each,
                                    [name]: uploadedFilePath
                                }
                            } return each
                        })
                        setForm({
                            ...form,
                            proofs: arr
                        });
                    } else {
                        throw new Error(uploadResult.data?.error || "Something went wrong. Please try again.");
                    }
                } catch (uploadError) {
                    setForm({
                        ...form,
                        error: uploadError.message,
                    });
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                setForm({
                    ...form,
                    error: "Please select an image",
                });
            }

        }

    }

    console.log(form,"formData")

    const updateDoctorDetails = async (e) => {
        e.preventDefault();
        const ImageUpadate = form.GalleryData.map(item => ({
            updateid: item.id,
            images: item.images,
        }));

        const ServiceDetails = form.DoctorServicesData.map(each => ({
            discount: each.discount,
            type: each.Type,
            // total_price: each.TotalPrice,
            service_name: each.ServiceName,
            service_id:each.ServiceId,
            total_amount: each.TotalAmount,
            fee: each.Fee,
            updateid: each.med_id,
            username:each.username
        }))

        const ProofsData = form.proofs.map((each => ({
            updateid: each.id ? each.id : 0,
            fileUpload: each.file,
            type: each.type,
            username:each.username
        })))


        let DocData;
        if (form.DocDetails && form.DocDetails.length > 0) {
            DocData = {
                salutation: form.DocDetails[0].salutation || 0,
                profile: form.DocDetails[0].profile,
                age: form.DocDetails[0].age,
                gender: form.DocDetails[0].gender,
                // clinicInformation: form.DocDetails[0].clinicInformation
            };
        }

        let DocEducationDetails;
        if (form.DocEducation && form.DocEducation.length > 0) {
            DocEducationDetails = {
                highestdegree: form.DocEducation[0].highestdegree || 0,
                university: form.DocEducation[0].university || '',
                yearofawardingdegree: form.DocEducation[0].yearofawardingdegree || '',
                specialization: form.DocEducation[0].specialization || 0,
                department: form.DocEducation[0].department || 0,
                systemofmedicine: form.DocEducation[0].systemofmedicine || 0,
                yearsofexperience: form.DocEducation[0].yearsofexperience || '',
            }
        }

        try {
            const { data } = await updateDoctordetails({
                variables: {
                    email: form.email,
                    address: form.address || '',
                    name: form.name,
                    mobile: form.mobile,
                    images: ImageUpadate,
                    tags: form.Tags || {},
                    additionalinformation: form.AdditionalInformation,
                    doctorestablishment: form.clinichospital || {},
                    verification: ProofsData,
                    services: ServiceDetails,
                    aboutdoctor: form.AboutDoctor,
                    servicesandprocedures: form.ServicesAndProcedure,
                    clinicInformation: form.ClinicInformation,
                    userdata: DocData || {},
                    doctordetails: DocEducationDetails || {},
                    // username:form.username
                },
                refetchQueries: [
                    {
                        query: GET_DOCTOR_DETAILS,
                        variables: {
                            search: searchItemValue,
                            type: "both",
                            status: "",
                            pageId: parseInt(tablePagination)
                        },
                        fetchPolicy: "network-only",
                    },
                ],
            });
            showMessage("Successfully updated data", "success", toast);
            await refetch()
            setTimeout(() => {
                setShowModal(false)
            }, 1500)
        } catch (error) {
            console.log(error);
            showMessage(error.message, "error", toast);
        }
    };

    console.log(form,"Akhilllllllllllllllllllll")


    const RemoveProofs = (indexToRemove) => {
        setForm(prevForm => ({
            ...prevForm,
            proofs: prevForm.proofs.filter((_, index) => index !== indexToRemove)
        }));
    };

    return (
        <React.Fragment>
            <Modal size="xl" show={showModal}  {...props}>
                <SuccessMessage />
                <Modal.Header closeButton className={styles1.services_bg}>
                    
                        <div className="d-flex justify-content-between" id="oledit" style={{width:"-webkit-fill-available"}}>
                        <Breadcrumb className="d-flex">
                            <Breadcrumb.Item href="#" className="theme12 f14">
                                <i className="fa fa-home"></i>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className="theme14 f14">
                                Clinic & Doctor Edit
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="editdoctorbg"><i className="fa fa-circle pe-1 f13"></i>{form.status}</div>
                        </div>
                    
                </Modal.Header>
                <Modal.Body className={styles1.services_bg}>
                    <Form onSubmit={updateDoctorDetails}>
                        <div className="mt-3">
                            <div className="mx-md-5 px-md-5 px-0 mx-0">
                                <div className="rounded">
                                    <div>
                                        <div>
                                            {/* Column 1: Establishment Details */}
                                            <h6 className="mb-4"><b>Establishment Details</b></h6>
                                            <div className="row">
                                                {/* Column 1.1: Checkbox */}
                                                {/* Column 1.2: Hospital/Clinic Name */}
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Hospital / Clinic Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Hospital / Clinic Name"
                                                            className={styles1.services_input}
                                                            name="clinichospital"
                                                            onChange={(e) => handleChangeClinichospitalChange(e, "clinichospital")}
                                                            value={ClinicData}
                                                            disabled={disableValue}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                {/* Column 1.3: Contact Number */}
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Contact Number</Form.Label>
                                                        <Form.Control type="text" placeholder="Contact Number" className={styles1.services_input} name="cliniccontactnumber" onChange={(e) => handleChangeClinichospitalChange(e, "cliniccontactnumber")} value={ClinicContactNumber} disabled={disableValue} />
                                                    </Form.Group>
                                                </div>
                                                {/* Column 1.4: Email Id */}
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Email Id</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Email ID"
                                                            className={styles1.services_input}
                                                            onChange={handleChange}
                                                            name="email"
                                                            value={form.email}
                                                            disabled={disableValue}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                {/* Column 1.5: Consultation Timings */}
                                                <div className="toggle-switch col-12 col-md-6 col-lg-4 ">
                                                    <div className="clinicCareChecked d-flex flex-column mb-2">
                                                        <label htmlFor="Consultationtimings mb-0 pb-0">Consultation Timings</label>
                                                        <Form.Control type="text" placeholder="consultation time" name="consultation_timings" onChange={(e) => handleChangeClinichospitalChange(e, "consultation_timings",)} value={ConsultationTimeings} disabled={disableValue} />
                                                    </div>
                                                </div>
                                                {/* Column 1.6: Clinic Timings */}
                                                <div className="toggle-switch col-12 col-md-6 col-lg-4  ">
                                                    <div className="clinicCareChecked d-flex flex-column  ">
                                                        <label htmlFor="clinictimings">Clinic Timings</label>
                                                        <Form.Control type="text" placeholder="Clinic time" name="clinic_timings" onChange={(e) => handleChangeClinichospitalChange(e, "clinic_timings",)} value={ClinicTimeings} disabled={disableValue} />
                                                    </div>
                                                </div>
                                                {/* Column 1.7: Clinic Location */}
                                                <div className="toggle-switch col-12 col-md-6 col-lg-4 ">
                                                    <div className="clinicCareChecked d-flex flex-column my-2">
                                                        <label htmlFor="clinictimings">Clinic Location</label>
                                                        <span className="p-input-icon-left">
                                                            <i className="pi pi-map-marker" />
                                                            <Form.Control type="text" name="location" placeholder="Clinic Location" onChange={(e) => handleChangeClinichospitalChange(e, "location",)} value={ClinicLocation} disabled={disableValue} />
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Column 1.8: Address */}
                                                <div className="col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Address</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            name="address"
                                                            placeholder=" Address"
                                                            onChange={handleChange}
                                                            value={form.address}
                                                            disabled={disableValue}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Clinic Information</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            placeholder="Enter Clinic Informationa"
                                                            name="information"
                                                            onChange={(e) => handleClinicInfoDetailsChange(e, "information")}
                                                            value={ClinicInformation}
                                                        // disabled={disableValue}  
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="mb-4">
                                                        <p className="mb-2">Do you</p>
                                                        <div className="d-flex">
                                                            <div >
                                                                <label>
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        checked={Facility === 1}
                                                                        name="ownfacility"
                                                                        onChange={(e) => handleCheckboxChange(e, "ownfacility")}
                                                                        className="me-2"
                                                                    />
                                                                    <small><b>Own a facility</b></small>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label className="ms-4">
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        checked={Facility === 2}
                                                                        name="workfacility"
                                                                        onChange={(e) => handleCheckboxChange(e, "workfacility")}
                                                                        className="me-2"
                                                                    />
                                                                    <small><b>Work at a facility</b></small>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Tags</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            placeholder="Enter Tags"
                                                            name="tag"
                                                            onChange={(e) => handleTagschanges(e, "tag")}
                                                            value={TagsData}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">About doctor</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            placeholder="Enter About doctor"
                                                            name="about"
                                                            onChange={(e) => handleDoctorDetailsChange(e, "about")}
                                                            value={AboutDoctor}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-4">
                                                    <Form.Group controlId="formBasicEmail" className="mb-4">
                                                        <Form.Label className="mb-0">Additional information</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            name="information"
                                                            placeholder="Enter Additional Information"
                                                            onChange={(e) => handleAditionalInformation(e, "information")}
                                                            value={AdditionalInformation}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <h6 class="mb-4 mt-4"><b>Gallery</b></h6>
                                                {form.GalleryData && form.GalleryData.map((item, index) => {
                                                    return (
                                                        <div className="col-lg-3 d-flex align-ites-center mt-4">
                                                            {form.GalleryData ? (
                                                                <div className="d-flex align-items-center">
                                                                    {item.images ?
                                                                        <>
                                                                            <img src={item.images} alt="Gallery Image" style={{ width: "100px", height: "100px" }} onClick={() => handleImageClick(item.images)} />
                                                                            <div style={{ marginLeft: "40px" }}>
                                                                                <button
                                                                                    className="btn btn-link p-0"
                                                                                    style={{ color: "red" }}
                                                                                    onClick={() => RemoveImage(item.id)}
                                                                                >
                                                                                    <i className="fa fa-trash mt-2"></i>
                                                                                </button>
                                                                            </div>
                                                                        </>
                                                                        : ""}
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                                <div className="text-danger">{SuccessMes}</div>
                                                {moreImages.map((item, idx) => {
                                                    return (
                                                        <div className="col-lg-12 d-flex align-ites-center mt-4" key={idx}>
                                                            <Form.Group controlId="formBasicEmail" className="">
                                                                <Form.Label className="mb-0">Image upto - <span className='text-danger'> 10Mb only*</span> </Form.Label>
                                                                <Form.Control
                                                                    type="file"
                                                                    name="image"
                                                                    mode="basic"
                                                                    accept="image/jpg, image/jpeg, image/png"
                                                                    onChange={(e) => handleChangeImageChange(e, idx, "image")}
                                                                />
                                                            </Form.Group>
                                                            {/* <div className=" mt-4 ms-3">
                                                                <i className="fa fa-plus addmoregallery mt-2 " onClick={AddmoreGallery}></i>
                                                            </div>
                                                            <div className=" mt-4 ms-3">
                                                                <i className="fa fa-trash removegallery mt-2 " onClick={() => RemoveMoreGallery(idx)}></i>
                                                            </div> */}
                                                        </div>
                                                    )
                                                })}
                                                <h6 class="mb-4 mt-4"><b>Services and procedures</b></h6>
                                                <div className="col-lg-12">
                                                    <CustomEditor
                                                        value={servicesAndProceduresData}
                                                        onInit={handleInit}
                                                        handleEditorChange={(content, editor) => handleEditorChange(content, editor)}
                                                    />
                                                    {/* <Editor
                                                        apiKey="o39m22oxa8b4z4ndo1u04hmgd21i3svag4fs8of3mx35y099" // Replace with your TinyMCE API key
                                                        value={servicesAndProceduresData}
                                                        init={{
                                                            height: 200,
                                                            menubar: false,
                                                            plugins: [
                                                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                                'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                            ],
                                                            toolbar: 'undo redo | blocks | ' +
                                                                'bold italic backcolor | alignleft aligncenter ' +
                                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                'removeformat | help',
                                                            branding: false
                                                        }}
                                                        onEditorChange={(content, editor) => handleEditorChange(content)}
                                                    /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="mb-4 mt-4 border-bottom"><b>Proofs</b></h6>
                                        <div className="text-danger">{SuccessMes}</div>
                                        {/* Column 2: Profile Verification */}
                                        <Row>
                                            <Col md={4}>
                                                <FormGroup>
                                                    <FormLabel>Identity Proof</FormLabel>
                                                    <Row>
                                                        <Col md={5} className="px-0">
                                                            {form.proofs && form.proofs.map((proof, index) => {
                                                                if (proof.type === 1) {
                                                                    return (
                                                                        <span key={index}>
                                                                            {proof.file ?
                                                                                <>
                                                                                    <Image src={proof.file} alt="image" width="50" height="50" onClick={() => handleImageClick(proof.file)} />
                                                                                    <span><i className="fal fa-times text-danger" role="button" onClick={() => RemoveUploadefile(index, proof.id)}></i></span>
                                                                                </>
                                                                                : ""}
                                                                        </span>
                                                                    )
                                                                }
                                                            })}
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <FormGroup>
                                                    <FormLabel>Registration Proof</FormLabel>
                                                    <Row>
                                                        <Col md={5} className="px-0">
                                                            {form.proofs && form.proofs.map((proof, index) => {
                                                                if (proof.type == 2) {
                                                                    return (
                                                                        <span key={index}>
                                                                            {proof.file ?
                                                                                <>
                                                                                    <Image src={proof.file} alt="image" width="50" height="50" onClick={() => handleImageClick(proof.file)} />
                                                                                    <span><i className="fal fa-times text-danger" role="button" onClick={() => RemoveUploadefile(index, proof.id)}></i></span>
                                                                                </>
                                                                                : ""}
                                                                        </span>
                                                                    )
                                                                }
                                                            })}
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <FormGroup>
                                                    <FormLabel>Establishment Proof</FormLabel>
                                                    <Row>
                                                        <Col md={5} className="px-0">
                                                            {form.proofs && form.proofs.map((proof, index) => {
                                                                if (proof.type == 3) {
                                                                    return (
                                                                        <span key={index}>
                                                                            {proof.file ?
                                                                                <>
                                                                                    <Image src={proof.file} alt="image" width="50" height="50" onClick={() => handleImageClick(proof.file)} />
                                                                                    <span><i className="fal fa-times text-danger" role="button" onClick={() => RemoveUploadefile(index, proof.id)}></i></span>
                                                                                </> : ""}
                                                                        </span>
                                                                    )
                                                                }
                                                            })}
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <h6 class="mb-4 mt-4 border-bottom"><b>Adding Proofs</b></h6>
                                        <Row>
                                            {form.proofs && form.proofs.filter(each => each.default === false).map((each, index) => {
                                                // console.log(each.ranid,"okok")
                                                return (
                                                    <>
                                                        <Col md={4}>
                                                            <FormGroup>
                                                                <FormLabel>Proof Type</FormLabel>
                                                                <Form.Select
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Service Discount"
                                                                    name="type"
                                                                    // value={ProofType}
                                                                    onChange={(e) => handleInputProofUpload(e, index, each.ranid)}
                                                                >
                                                                    <option value={""}>Select</option>
                                                                    <option value={1}>Identity Proof</option>
                                                                    <option value={2}>Registration Proof</option>
                                                                    <option value={3}>Estimated proof</option>
                                                                </Form.Select>
                                                            </FormGroup>
                                                            {/* <span className="text-danger mt-5" role="button" onClick={() => RemoveUploadefile(index)}>Delete</span> */}
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group>
                                                                <Form.Label>Upload File upto - <span className='text-danger'> 10Mb only*</span></Form.Label>
                                                                <Form.Control
                                                                    type="file"
                                                                    className="form-control"
                                                                    placeholder="Service Discount"
                                                                    name="file"
                                                                    accept="image/jpg, image/jpeg, image/png"
                                                                    onChange={(e) => handleInputProofUpload(e, index, each.ranid)}

                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4} className=" pt-3 d-flex align-items-center">
                                                            <div>
                                                                {/* <i className="fa fa-plus mt-2 pe-3" role="button" onClick={AddMoreIdentityProof}>Add Files</i> */}
                                                                <div className="mt-2 pe-3" role="button" onClick={AddMoreIdentityProof}>Add Files</div>
                                                            </div>
                                                            {/* {index !== 0 && (
                                                                <div className="text-danger">
                                                                    <i className="fa fa-trash mt-2" role="button" onClick={() => RemoveProofs(index)} ></i>
                                                                </div>
                                                            )} */}
                                                        </Col>
                                                    </>
                                                )
                                            })}
                                            {showPreview && (
                                                <div
                                                    style={{
                                                        position: 'fixed',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        zIndex: 1000,
                                                    }}
                                                    onClick={handleClosePreview}
                                                >
                                                    <img
                                                        src={selectedImage}
                                                        alt="Preview"
                                                        style={{ maxWidth: '90%', maxHeight: '90%' }}
                                                    />
                                                </div>
                                            )}
                                        </Row>
                                        {/* Column 3: Profile Verification */}
                                        <div className="py-4 py-lg-5 row">
                                            <h6 className="mb-4"><b>Services</b></h6>
                                            <div>
                                                <div className="">
                                                    <div className="d-flex">
                                                        {/* Column 3.1: Service */}
                                                        {/* Column 3.2: Consultation fee */}
                                                        <div className="ms-4">
                                                            <div className="toggle-switch mt-2">
                                                                <div className="d-flex">
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        className="toggle-switch-checkbox"
                                                                        name="consultationfee"
                                                                        checked={ServiceId === 361}
                                                                        // onChange={handleconsultationfeeChange}
                                                                        label="Connect Doc"
                                                                    />
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        className="toggle-switch-checkbox"
                                                                        name="clinic care"
                                                                        checked={ServiceId === 362}
                                                                        // onChange={handleClinicCareChange}
                                                                        label="clinic care"

                                                                    />
                                                                </div>
                                                                {ServiceId === 360 ?
                                                                    <div className="d-flex pt-4">
                                                                        <div>
                                                                            <FormControl type="Text"
                                                                                id="id" placeholder="Services Amount" value={FixedAmout} disabled />
                                                                        </div>
                                                                    </div> : ""}
                                                                {ServiceId === 361 ?
                                                                    <div className="d-flex pt-4">
                                                                        <div>
                                                                            <FormControl type="Text"
                                                                                id="id" placeholder="Clinicare Amount" value={FixedAmout} disabled />
                                                                        </div>
                                                                    </div>
                                                                    : ""}

                                                                {ServiceId === 360 || ServiceId === 361 ?
                                                                    <div className="d-flex pt-4">
                                                                        <div className="me-3">
                                                                            <Form.Check
                                                                                type="radio"
                                                                                id="discount"
                                                                                label="Discount"
                                                                                name="Type"
                                                                                onChange={handleMUpdateChange}
                                                                                value={RadioType}
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Form.Check
                                                                                type="radio"
                                                                                id="AdditionalFee"
                                                                                label="AdditionalFee"
                                                                                name="Type"
                                                                                onChange={handleAUpdateChange}
                                                                                value={RadioType}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    : ""}
                                                                {mupdate === true ?
                                                                    <div className="pt-4">
                                                                        <FormGroup>
                                                                            {/* <FormLabel>Service Discount</FormLabel> */}
                                                                            <InputGroup>
                                                                                <FormControl
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Service Discount"
                                                                                    name="discount"
                                                                                    onChange={handleChangeEnterAmount}
                                                                                />
                                                                                <InputGroup.Text>%</InputGroup.Text>
                                                                            </InputGroup>
                                                                        </FormGroup>
                                                                        <div className="pt-5">
                                                                            <FormGroup>

                                                                                <FormControl
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Total discount amount"
                                                                                    name="TotalAmount"
                                                                                    onChange={handleChangeEnterAmount}
                                                                                    value={FinalAmount ? FinalAmount : 0}
                                                                                    disabled
                                                                                />
                                                                            </FormGroup>
                                                                        </div>
                                                                    </div> : ""}
                                                                {Addition === true ?
                                                                    <div className="pt-4">
                                                                        <FormGroup>
                                                                            {/* <FormLabel>Additional Fee</FormLabel> */}
                                                                            <FormControl
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Additional Fee"
                                                                                name="fee"
                                                                                onChange={handleChangeEnterAmount}
                                                                            />
                                                                        </FormGroup>
                                                                        <div className="pt-5">
                                                                            <FormGroup>
                                                                                <FormControl
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Total Aditional amount"
                                                                                    name="TotalAmount"
                                                                                    onChange={handleChangeEnterAmount}
                                                                                    value={FinalAmount ? FinalAmount : 0}
                                                                                    disabled
                                                                                />
                                                                            </FormGroup>
                                                                        </div>
                                                                    </div>
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row justify-content-end">
                                                    <div className="text-success">{SuccessMesforUpdate}</div>
                                                    <div class="me-4 mt-2">
                                                        <a role="button" onClick={close}>Cancel</a>
                                                    </div>
                                                    <div class="mr-2">
                                                        <Button type="submit" class='background-blue-button-submit'>
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

            </Modal>
        </React.Fragment>
    );
};

export default EditDoctor_Modal;
