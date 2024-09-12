import Link from 'next/link';
import "../../styles/confirm.css";

export default function ConfirmPage() {
    return (
        <div className="">
            <div className="confirm__content">
                <div className="confirm__heading">
                    <h1>Confirm</h1>
                </div>
                <form className="form" action="/thanks">
                    <div className="confirm-table">
                        <table className="confirm-table__inner">
                            <tbody>
                                <tr className="confirm-table__row">
                                    <th className="confirm-table__header">お名前</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.lastName }} */}
                                        {/* {{ formData.firstName }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">性別</th>
                                    <td className="confirm-table__text">
                                        {/* {{ getGenderText(formData.gender) }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">メールアドレス</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.email }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">電話番号</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.tellFirst }} */}
                                        {/* {{ formData.tellSecond }} */}
                                        {/* {{ formData.tellThird }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">住所</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.address }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">建物名</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.building }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">お問い合わせの種類</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.category.content }} */}
                                    </td>
                                </tr><tr className="confirm-table__row">
                                    <th className="confirm-table__header">お問い合わせ内容</th>
                                    <td className="confirm-table__text">
                                        {/* {{ formData.detail }} */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=" button__area">
                        <button className="common-button" type="submit">送信</button>
                        <Link className="confirm-button" href="/">修正</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}