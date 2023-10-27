import React from 'react'
import styles from "./Modal.module.scss"
import { useForm } from 'react-hook-form';
import Field from '../field/Index';

const Modal = ({
    modalOpen,
    setModalOpen,
    img,
    statistics,
    setStatistics,
    // heading,
    // children
}) => {
    const formLabel = ["rank", "percentile", "correctanswer"]
    const {
        register,
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            rank: statistics?.rank || "",
            percentile: statistics?.percentile || "",
            correctanswer: statistics?.correctanswer || "",

        },
        mode: "all",
    });
    console.log('statistics?.percentile', statistics?.percentile)
    const onUpdate = async (data) => {
        console.log('data', data)
        setStatistics({
            rank: data?.rank,
            percentile: data?.percentile || 0,
            correctanswer: data?.correctanswer || 0,
        })
        setModalOpen(false)
    }
    if (modalOpen) {
        return (
            <div className={styles.mainContainer} onMouseDown={() => setModalOpen(false)}>
                <div className={styles.modalDiv} onMouseDown={(e) => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <p> Update Scores </p>
                        <img src={img} />
                    </div>
                    <div className={styles.modalBody}>
                        <form>
                            {formLabel.map((elem, index) => {
                                return (
                                    <>
                                        <Field
                                            controller={{
                                                name: elem,
                                                control: control,
                                                render: ({ field }) => {
                                                    return (
                                                        <div key={index} className={styles.modalForm}>
                                                            <p> <span className={styles.bgspan}> {index + 1} </span> Update your <span className={styles.bold}> {elem === "correctanswer" ? "current score (out of 15)" : elem} </span> </p>
                                                            <input  {...register(elem)} type="number" {...field} max={elem === "correctanswer" ? "15" : "10000"} />
                                                        </div>
                                                    );
                                                },
                                            }}
                                        />
                                    </>
                                )
                            })}
                        </form>
                    </div>

                    <div className={styles.modalFooter}>
                        <button className={`${styles.cancelbtn} ${styles.btn}`} onClick={() => setModalOpen(false)} > Cancel </button>
                        <button className={`${styles.savbtn} ${styles.btn}`} type="submit" onClick={handleSubmit(onUpdate)}> Save </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;