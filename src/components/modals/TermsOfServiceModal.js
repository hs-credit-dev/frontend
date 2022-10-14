import React, { useState } from 'react';
import ReactModal from 'react-modal';

import '../../styles/footer-modals.css';
import logo from '../../assets/svg/hsc-logo-with-text.svg';

export default function TermsOfServiceModal({ text }) {

    const [modal, setModal] = useState({ showModal: false });

    const seeDetail = () => {
        setModal({ showModal: true });
    }

    const hideDetail = () => {
        setModal({ showModal: false });
    }


    return (
        <span className='text-container'>
            <span className="footer-text-link text-sm" onClick={() => seeDetail()}>{text}</span>

            <ReactModal
                ariaHideApp={false}
                className="detailModal"
                contentLabel="details tab"
                isOpen={modal.showModal}
                onRequestClose={hideDetail}
                shouldCloseOnOverlayClick={false}
            >
                <div className='modal-container'>
                    <div className='modal-header'>
                        <img className='header-logo' src={logo} alt="HSC.Logo" />
                        <p className='header-text'>hs.credit</p>
                    </div>
                    <div className='main-text'>
                        <div className='main-title'>
                            TERMS OF USE
                        </div>
                        <div className='main-paragraph'>
                            Before using hs.credit (<span className="font-bold">"the App"</span>), please carefully read this agreement relating to User use of the App. By using the App, User Agrees to be bound by these Terms and Conditions and by the concurrent Privacy Policy. If User does not agree to these Terms and Conditions or the Privacy Policy, do not use the App.
                        </div>
                        <div className='main-paragraph'>
                            These Terms and Conditions are a legal agreement (<span className="font-bold">"Agreement"</span> or <span className="font-bold">"Contract"</span>) between hs.credit (also as <span className="font-bold">"We"</span>, <span className="font-bold">"Us"</span> and <span className="font-bold">"Our"</span>) and you, the <span className="font-bold">"User"</span> (also as <span className="font-bold">"I"</span> and <span className="font-bold">"User”</span> of the App and governs access and use of it. Collectively, hs.credit and User are the "Parties".
                        </div>
                        <div className='main-paragraph'>
                            READ THESE TERMS AND CONDITIONS CAREFULLY. THIS AGREEMENT CONTAINS IMPORTANT TERMS GOVERNING THE SERVICES PROVIDED BY US REGARDING THE APP, USER RESPONSIBILITIES AND HS.CREDIT’S OBLIGATIONS, AND INCLUDES LIMITS ON HS.CREDIT’S LIABILITY, INDEMNITY AND OTHER IMPORTANT CLAUSES.
                        </div>
                        <div className='main-subtitle underline'>
                            hs.credit Overview
                        </div>
                        <div className='main-paragraph'>
                            [•]
                        </div>
                        <div className='main-subtitle underline'>
                            Consent to Terms of Service and Privacy Statement
                        </div>
                        <div className='main-paragraph'>
                            Prior to accessing the App, the user will be prompted about the existence of these Terms of Service and a separate Privacy Statement.  Proceeding to use the app is an acknowledgement of and consent to the Terms of Service and Privacy Statement.  Continuation of use of the App following this notice, and other internal notices preceding access of the App, of the Terms of Service and Privacy Statement constitute consent to the Terms of Service and Privacy Statement. The user retains the right to not consent to the app by choosing to not use the App. Failure to read and/or understand the contents of these Terms of Service or the Privacy Statement do not constitute a valid claim of non-consent.
                        </div>
                        <div className='main-subtitle underline'>
                            User Data and the App.
                        </div>
                        <div className='main-paragraph'>
                            As an App which collects necessary, but voluntarily provided, data for the creation of an accurate, representative, and legitimate user base it is imperative that each user read the App’s Privacy Statement prior to use.  Use of the app following such notices of the existence of these Terms of Service and that Privacy Statement constitutes consent, even if the user has not actually read the Privacy Statement.  Failure to read and/or understand the contents of these Terms of Service or the Privacy Statement do not constitute a valid claim for non-consent
                            <br />
                            While the Privacy Statement will expand on this information in greater detail, the following is key for the user’s immediate understanding:
                            <ul className='main-ordered-list my-4'>
                                <li>
                                    The user’s voluntarily-provided information will never be used for any commercial purposes beyond the scope of the app itself, thereby we agree to not use personal data for marketing purposes, sale to third party, or exploitation for any pecuniary gain or increased exposure.
                                </li>
                                <li>
                                    We reserve the right to contact the user according to their furnished email address about application updates, news, offers and deals, events, and other internal information.
                                </li>
                                <li>
                                    Our disclosure of data will only be done when necessary by law, in compliance with a court order, or when done in good faith in furtherance of a claim, defense, or other position within a civil lawsuit.
                                </li>
                                <li>
                                    Your identifying information will be displayed on your profile, including your name, date of birth, and personal/work email address.
                                </li>
                            </ul>
                            The App is compatible with standard wired internet, Wi-Fi, or telephone service provider’s internet. When Users access the App on a communications network, cellular network, or other network or system having charges for data transfer and or communications, the provider's rates will apply as charges to User.
                        </div>
                        <div className='main-subtitle underline'>
                            Parties Are Independent.
                        </div>
                        <div className='main-paragraph'>
                            User Agrees that no joint venture, partnership, employment, or agency relationship exists between User and hs.credit as a result of these Terms and Conditions or User use of the App. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained in these Terms and Conditions is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to User use of the App or information provided to or gathered by us with respect to such use.
                        </div>
                        <div className='main-paragraph'>
                            The information provided in the App is available to paid members and for informational purposes only and does not create a business or professional services relationship between User and hs.credit.
                        </div>
                        <div className='main-subtitle underline'>
                            Entire Agreement.
                        </div>
                        <div className='main-paragraph'>
                            Unless otherwise specified herein, these Terms and Conditions constitute the entire agreement between Parties with respect to the App and it supersedes any prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the User and hs.credit, with respect to the App. User confirms that User has not entered into this Contract on the basis of any representation that is not expressly incorporated into this Contract. User acknowledges that User is not relying on hs.credit and or the App for advice. hs.credit is not bound by any representation, promise, condition, inducement, or warranty, express or implied, that is not included in writing in this contract.
                        </div>
                        <div className='main-paragraph'>
                            By accepting these Terms and Conditions, User has accepted a legally enforceable online contract, and additionally has agreed upon the terms and conditions set forth in these <span className="font-bold">"Terms and Conditions"</span> governing User transaction with hs.credit and use of the App.
                        </div>
                        <div className='main-paragraph'>
                            Should there arise any conflict between this Agreement and User's download request, or other document, these Terms and Conditions will govern, whether any such document is prior to or subsequent to this Agreement. The provisions in this Agreement are for the sole benefit of User and hs.credit and our assigns and shall not inure to the benefit of any other person either as a third-party beneficiary or otherwise.
                        </div>
                        <div className='main-subtitle underline'>
                            Content.
                        </div>
                        <div className='main-paragraph'>
                            All information and any, data, text, software, music, sound, photographs, graphics, video, messages, or any other materials whatsoever shared with User by the App is referred to collectively as <span className="font-bold">"Content."</span> Under no circumstances will we be liable in any way for any Content, including, but not limited to, liability for any errors or omissions in any Content or for any loss or damage of any kind incurred as a result of the use of any Content posted, emailed or otherwise transmitted via the App.
                        </div>
                        <div className='main-subtitle underline'>
                            Limitations On User's Use of The App.
                        </div>
                        <div className='main-paragraph'>
                            By using the App User represents, affirms, and declares that:
                            <ol className='main-ordered-list'>
                                <li>
                                    all business User conduct through the App is lawful and that User is subject to civil and criminal penalties should User violate those laws and regulations which may apply to such business;
                                </li>
                                <li>
                                    User acknowledge that any information provided by hs.credit to User in the course of performing the Services may be derived from private or government agency databases and other information sources with respect to which we have no control, and that we shall have no liability whatsoever with respect to such information, including, without limitation, in the event any such information is inaccurate, out of date, contains errors or omissions, or is otherwise incorrect in any way; and that
                                </li>
                                <li>
                                    As a condition of User use of the App, User warrants to hs.credit that User will not use the App for any purpose that is unlawful or prohibited by these Terms of Conditions. User may not use the App in any manner which could damage, disable, overburden, or impair the App or interfere with any other party's use and enjoyment of the App. User Agrees to use the App only to communicate, post, send and receive messages and material that are proper and related to the App.
                                </li>
                                <li>
                                    User shall not engage in any illegal or abusive behavior by use of the App. User has no right to sublicense or sell the App to any party. User may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the App and or application or services. User may not modify, adapt or hack the App or modify another software and or application so as to falsely imply that it is associated with the App or hs.credit.
                                </li>
                                <li>
                                    The App services or related materials may not be sold, rented or otherwise commercialized with third parties. User agrees not to sell, resell, or offer for any commercial purposes, any portion of the App, or access to the App. Any use of any of the materials available through the App other than for private, personal, non-commercial viewing purposes is strictly prohibited.
                                </li>
                                <li>
                                    We reserve the right to investigate and prosecute violations of any of the above to the fullest extent of the law.  We reserve the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request.
                                </li>
                                <li>
                                    User agrees not to reverse engineer, disassemble, decompile, convert into human-readable format, or otherwise attempt to derive the source code of any software included in or related to the App. User agrees not to copy any ideas, features, functions or graphics of or related to the App. We may involve and cooperate with law enforcement authorities in prosecuting Users who violate these Terms and Conditions.
                                </li>
                                <li>
                                    hs.credit reserves the sole discretion to deny, revoke, or otherwise restrict the access privileges of any User who at any time fails to comply with these Terms and Conditions.
                                </li>
                            </ol>
                        </div>
                        <div className='main-subtitle underline'>
                            Assignment and Transfer.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit is entitled to transfer all of its rights and obligations under this Agreement to another party without User consent and User hereby accepts and approves any such transfer of rights and obligations. In the event of such transfer, hs.credit's rights and obligations to User under this Agreement shall automatically be discharged. hs.credit is, at all times, entitled to engage contractors or sub-contractors to carry out all or any of our obligations under this Agreement. This Agreement is not assignable by User. This Agreement or any portion thereof is assignable by hs.credit in its sole discretion. User is not entitled to cede, delegate or otherwise transfer User rights and obligations under this Agreement to any other party.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in hs.credit's sole discretion.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit may use aggregated and anonymized information and statistics for the purposes of analyzing use of the hs.credit software and or application and Service and may provide such aggregated and anonymized information to third parties. These statistics will not include information that can be used to identify any individual.
                        </div>
                        <div className='main-paragraph'>
                            User agrees that hs.credit can use the User's communications device and other information to let User know about other activities including goods and services offered by hs.credit. or third parties which We think may be of interest to User.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit can change its Privacy Policy at any time for any reason. Continued use of the hs.credit service will indicate that User agrees to any such changes. It is User's responsibility to monitor and review the Privacy Policy frequently.
                        </div>
                        <div className='main-subtitle underline'>
                            Links
                        </div>
                        <div className='main-paragraph'>
                            Links within the App may lead to web sites or services not operated by hs.credit. hs.credit exercises no control whatsoever over such other software and or applications and web-based resources and information and is not responsible or liable for the availability thereof or the content, advertising, products or other materials thereon. No judgment or warranty is made with respect to such other services and hs.credit takes no responsibility for such other services.
                        </div>
                        <div className='main-paragraph font-bold'>
                            A LINK TO ANOTHER SITE OR SERVICE IS NOT AN ENDORSEMENT OF THAT SITE OR SERVICE BUT SHALL BE DEEMED A SHARING OF INFORMATION.
                        </div>
                        <div className='main-paragraph'>
                            Any use User makes of the information provided by the App, or any site or service linked to by App, is at its own risk. The App shall not be responsible or liable, directly or indirectly, for any damage or loss incurred or suffered by any User in connection therewith. User access and use of linked software and or applications, web sites including information, material, products and services therein, is solely at User own risk.
                        </div>
                        <div className='main-subtitle underline'>
                            Intellectual Property
                        </div>
                        <div className='main-paragraph'>
                            Unless otherwise noted, all text, images, illustrations, designs, icons, photographs, video clips, and other materials that are part of the App (collectively the <span className='font-bold'>"Materials"</span>) are registered and unregistered copyrighted works, trademarks, trade dress, or other intellectual properties owned, controlled, or licensed by us or used under principles of "fair use."
                        </div>
                        <div className='main-paragraph'>
                            The Materials and the App, as a whole, are intended solely for User personal use. User may download or copy the Materials for such personal use, provided that User does not remove any copyright or other proprietary notices contained on the Materials. By allowing User to download these Materials for personal use, we expressly do not transfer to User any right, title, or interest in the Materials.
                        </div>
                        <div className='main-paragraph'>
                            We respect the intellectual property rights of others and require that the people who use the App do the same. It is our policy to respond promptly to claims of intellectual property misuse.
                        </div>
                        <div className='main-paragraph'>
                            No permission is granted here to User to use, or permit others to use our icons, site address, trademarks and service marks.
                        </div>
                        <div className='main-subtitle underline'>
                            Digital Millennium Copyright Act.
                        </div>
                        <div className='main-paragraph'>
                            We respect intellectual property rights and will deny access to the hs.credit site to anyone who, in our discretion, repeatedly infringes the intellectual property rights of others. In addition, we will use reasonable efforts, in light of our resources, to accommodate generally accepted technical measures used by copyright owners to identify and protect their copyrighted works.
                        </div>
                        <div className='main-paragraph'>
                            If User believes materials posted on the hs.credit site infringe rights User enjoys under copyright law in specific materials (collectively a <span className="font-bold">"Work"</span>), we request that User directs its concerns to the <span className="font-bold">"Designated Agent"</span> provided below, pursuant to the Digital Millennium Copyright Act (hereafter the <span className="font-bold">"DMCA"</span>). User's notice to hs.credit at 244 5th Avenue, Suite N269, New York, NY 10001 and/or info@hs.credit should follow the notice provisions set out in the DMCA. Upon receiving User's notice, we agree to respond to it and, if appropriate, remove or disable access to material User believes infringes User Work.
                        </div>
                        <div className='main-paragraph'>
                            If User is a US copyright owner or an agent of a US copyright owner and believes that any User content or other content on available within the App infringes upon User's User copyrights, User may submit a notification pursuant to Title 17, United States Code, Section 512 of the DMCA to hs.credit, User acknowledges and agrees that upon receipt and notice of a claim of infringement, we may immediately remove the identified materials from the App without liability.
                        </div>
                        <div className='main-paragraph'>
                            If User should have questions or comments about these Terms and Conditions or about the Privacy Policy, or if User would like to obtain additional information regarding its privacy rights, please contact info@hs.credit.
                        </div>
                        <div className='main-paragraph'>
                            All comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted, or offered to us through our App or website or otherwise disclosed, submitted, or offered in connection with User's use of hs.credit's site (collectively <span className="font-bold">"User Comments"</span>) shall be and remain the property of hs.credit. User agrees that we shall be free to use, without restriction and without compensation to User, any ideas, concepts, know-how, suggestions, or techniques contained in any User Comments User provides to us for any purpose whatsoever.  We have no obligation to respond to any User Comments.
                        </div>
                        <div className='main-paragraph'>
                            All notices, requests, demands and other communications required by this agreement shall be in writing to hs.credit at 244 5th Avenue, Suite N269, New York, NY 10001 and/or info@hs.credit, and except as expressly provided elsewhere in this agreement, shall be deemed to have been given at that time of delivery if personally delivered, or at the time of mailing, if mailed by first class, postage prepaid, and addressed to the party at its address as stated in this agreement.
                        </div>
                        <div className='main-subtitle underline'>
                            Indemnification.
                        </div>
                        <div className='main-paragraph'>
                            User agrees to defend, indemnify, and hold harmless, hs.credit, its parents, subsidiaries, and affiliates, and each of their respective officers, directors, attorneys, employees, trustee as the case may be,  from any and all claims, liabilities, costs, and expenses, including, but not limited to, attorneys' fees and expenses, arising out a breach by User or any User of User account of these Terms and Conditions or Privacy Policy or arising out of a breach of User obligations, representation and warranties under these Terms and Conditions. User agrees to indemnify, defend, protect and hold harmless all of the hs.credit’s and or the App Parties from and against all losses, claims, and expenses (including attorneys' fees and costs) arising out of or relating to:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li>
                                    User breach of any terms of this Agreement;
                                </li>
                                <li>
                                    the determination by a jurisdiction that User has improperly utilized the Services of hs.credit to violate the laws and regulations of the jurisdiction;
                                </li>
                                <li>
                                    User's use of the App or failure to pay any sums due us or any local government; or
                                </li>
                                <li>
                                    User supplying inaccurate, out of date, errors or omissions, or otherwise incorrect information as well as any action taken by User as a direct or indirect use of the App and or which result from the information displayed by the App.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            Each User shall indemnify, defend and hold harmless hs.credit and affiliates and their respective officers, employees, agents, trustees, as the case may be, and each of hs.credit's software, App and or application partners, from any and all claims, demands, damages, costs, and liabilities including reasonable attorneys' fees, made by any third party due to or arising out of that User's acts or omissions, including claims arising out of that User's use of the App; his or her submission, posting or transmission of Content or his or her violation of the Terms and Conditions.
                        </div>
                        <div className='main-paragraph'>
                            User Agrees to indemnify and defend hs.credit and its affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, fees of any kind (including reasonable attorneys' fees and legal costs), arising from or relating to:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li style={{ listStyleType: "lower-alpha", display: "list-item" }}>
                                    the use of the App by User;
                                </li>
                                <li style={{ listStyleType: "lower-alpha", display: "list-item", }}>
                                    the violation of these Terms and Conditions by User or anyone using User account; or
                                </li>
                                <li style={{ listStyleType: "lower-alpha", display: "list-item", }}>
                                    the violation of any rights of any third party, including intellectual property, privacy, publicity, or other proprietary rights by User or anyone using User account.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            hs.credit reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by User. If hs.credit does assume the defense of such a matter, User will reasonably cooperate with hs.credit in such defense.
                        </div>
                        <div className='main-paragraph'>
                            User agrees to defend, indemnify and hold hs.credit and or the App harmless from and against any and all claims, damages, costs, and expenses, including attorney's fees, arising from or in any way related to User failure to comply with these Terms and Conditions or use of the App.
                        </div>
                        <div className='main-paragraph'>
                            The Parties agree that hs.credit is not an insurer and no insurance coverage is offered herein.  hs.credit is not assuming liability and therefore shall not be liable to User for any loss or injury sustained by User as a result of any cause whatsoever, regardless of whether or not such loss or injury was caused by or contributed to by hs.credit's negligent (including gross negligence) performance to any degree or failure to perform any obligation or strict products liability. User releases hs.credit from any claims for contribution, indemnity or subrogation.
                        </div>
                        <div className='main-paragraph'>
                            If anyone other than User, including User's insurance, asks hs.credit or representatives to pay for any loss, damage, cost or expense (including economic losses, property damage, personal injury, or death) arising out of or from, in connection with, related to, as a consequence of, or resulting from any reason, including:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li>
                                    the active or passive, sole, joint or several negligence of any kind or degree of hs.credit or any of its representatives;
                                </li>
                                <li>
                                    the improper operation of the App;
                                </li>
                                <li>
                                    a breach of contract; or
                                </li>
                                <li>
                                    any claims for subrogation, indemnification or contribution,
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            then User agrees to defend, indemnify and hold hs.credit or its representatives harmless (without any condition that hs.credit or representatives first pay) from any and all such loss, damage, cost and expense, including attorneys' fees, which may be asserted against or incurred by hs.credit or any of the representatives in connection with any and all such claims to the fullest extent permitted by applicable law. User's duty to indemnify, including the cost and duty to defend and hold hs.credit and its representatives harmless shall include all of the hs.credit 's personnel-related costs, overhead, experts' fees, actual attorneys' fees, court costs and all related expenses, including all fees and costs incurred to enforce and establish rights under this indemnification provision. User on its behalf and any insurance carrier waives any right of subrogation User's insurance carrier may otherwise have against hs.credit or hs.credit's subcontractors arising out of this Agreement or the relation of the Parties hereto.
                        </div>
                        <div className='main-subtitle underline'>
                            Waiver.
                        </div>
                        <div className='main-paragraph'>
                            Any failure of hs.credit to insist upon or enforce any provision of these Terms and Conditions shall not be construed as a waiver of any provision or right of hs.credit. The failure of either party to insist upon or enforce strict performance by the other party of any provision of this Agreement or to exercise any right under this Agreement shall not be construed as a waiver of the right of such party to assert or rely upon such provision or right in any other instance.
                        </div>
                        <div className='main-paragraph'>
                            Any waiver of any breach of this Agreement, by User or hs.credit, shall not be construed as a waiver of any subsequent breach. User and hs.credit’s rights hereunder shall be cumulative, and any rights hereunder may be exercised concurrently or consecutively and shall include all remedies available even though not expressly referred to herein.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER RELEASES, WAIVES, DISCHARGES AND PROMISES NOT TO SUE OR BRING ANY CLAIM OF ANY TYPE AGAINST HS.CREDIT FOR LOSS, DAMAGE OR INJURY RELATING IN ANY WAY TO REACH OUT OR SERVICES PROVIDED BY HS.CREDIT.
                        </div>
                        <div className='main-subtitle underline'>
                            Modification.
                        </div>
                        <div className='main-paragraph'>
                            We reserve the right to modify or terminate the App for any reason at any time without notice to the User. The App may amend and or change this Agreement at any time without notice to User. We may change, move, discontinue, or delete portions of our App, or add to our App at any time. The parties to this Agreement acknowledge that hs.credit retains sole authority to determine the technical operation of the App.
                        </div>
                        <div className='main-paragraph'>
                            Any continued use of the App constitutes User's agreement to comply with such modifications and be bound by the Agreement as amended. In addition, by accepting or using the App, User agrees to periodically review this Agreement and be bound by any amendments to the Agreement. hs.credit shall not be liable to any User or other third party for any such modification, suspension, or discontinuance except as expressly provided herein.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit may make improvements and or changes in the App, including the Terms and Conditions of User use of the App, without liability.
                        </div>
                        <div className='main-paragraph'>
                            Please check the App frequently for any changes to these Terms and Conditions.
                        </div>
                        <div className='main-subtitle underline'>
                            Limitations On Liability.
                        </div>
                        <div className='main-paragraph font-bold'>
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OR CONDITION OF ANY KIND, EXPRESS OR IMPLIED. HS.CREDIT AND OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APP, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ABSENCE OF ERRORS, BUGS, VIRUSES, AND OR MECHANISMS WHICH MAY DISABLE, DAMAGE, OR INTERFERE WITH COMPUTER SYSTEMS OR NETWORKS.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER ACKNOWLEDGES THAT USER USE OF REACH OUT IS AT USER SOLE RISK, THAT USER ASSUMES FULL RESPONSIBILITY FOR ALL COSTS ASSOCIATED WITH ALL NECESSARY SERVICING OR REPAIRS OF ANY EQUIPMENT USER USE IN CONNECTION WITH USER USE OF THE APP, AND THAT HS.CREDIT. SHALL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND RELATED TO USER USE OF THE APP. HS.CREDIT AND OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE APP OR DATA THEREIN FOR ANY PURPOSE OR THE AVAILABILITY OF ANY NETWORKS OR COMMUNICATIONS LINES OR FUNCTIONING OF ANY MOBILE PHONE OR DEVICE NECESSARY FOR THE APP SERVICES.
                        </div>
                        <div className='main-paragraph'>
                            User agrees that User use of the App and information delivered by the App is at User's own and sole risk. All Services (including all information presented by the App) are provided on an "AS IS" and "AS AVAILABLE" basis. hs.credit disclaims all warranties and duties of any kind, express, implied or statutory, including, but not limited to, any implied warranties of merchantability or fitness for a specific purpose, non-infringement or title, duties of workman-like effort, or lack of negligence. hs.credit assumes no responsibility for errors or omissions by the App and the data presented by the App and is not responsible in any way for the functionality, specifications, accuracy or any other aspect thereof. hs.credit does not guarantee continuous, uninterrupted, or secure access to the App or that defects in the App will be corrected.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit reserves the right at any time and without prior notice to change the hours of operation to limit User access to the App in order to perform repairs, make modifications and to add or withdraw products or features to or from the App at any time. User is responsible for implementing sufficient procedures to satisfy User’s particular requirements for protection of User system and or accuracy of data, and for maintaining a means of reconstruction of lost data. Without limiting the above, User agrees that neither hs.credit nor any of its parent corporations, subsidiaries, partners, employees, independent contractors, officers, directors, attorneys, agents, affiliates, representatives, successors and or assigns (each a <span className="font-bold">"hs.credit Party"</span>; collectively the hs.credit Parties) makes any warranties or undertakes any duties regarding, without limitation, the following:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li>
                                    infringement of title or quiet enjoyment;
                                </li>
                                <li>
                                    functionality;
                                </li>
                                <li>
                                    content, format, accuracy, completeness, or completion of forms;
                                </li>
                                <li>
                                    timeliness of Services;
                                </li>
                                <li>
                                    uninterrupted, secure, error or virus-free Services or storage;
                                </li>
                                <li>
                                    any alteration or destruction of Content resulting from third parties' unauthorized access to or use of the App.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            The information presented by the App is given "as is" and without warranties of any kind, either expressed or implied, including all warranties of usability and fitness for a particular purpose. There is no warranty that the App will be available, uninterrupted, error-free, or free of viruses or other harmful components.  hs.credit is not liable to any person for any damages of any kind, including without limitation direct or indirect, incidental, or consequential damages, losses or expenses arising out of or in connection with the App or use thereof, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, network error, device theft, hotline error, computer virus or system failure, even if advised of possibility of such damages, losses or expenses.
                        </div>
                        <div className='main-paragraph'>
                            In no event will hs.credit be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) without regard to the form of action and whether in contract, tort, negligence, strict liability, or otherwise, arising out of or in connection with this site, any content on or accessed through this site or any site service linked to, or any copying, displaying, or use thereof.
                        </div>
                        <div className='main-paragraph'>
                            This disclaimer of liability applies to any damages or injuries caused by the App, including, without limitation, those damages or injuries occurring as a result of:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li style={{ listStyleType: "lower-roman", display: "list-item" }}>
                                    any error, omission, deletion, or defect in the Content available on the App; or
                                </li>
                                <li style={{ listStyleType: "lower-roman", display: "list-item" }}>
                                    any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction of records, information or data, unauthorized access to, alteration of, or use of records, information or data, whether for breach of contract, tort, negligence, defamation, or any other cause of action. hs.credit does not warrant or guarantee that access to the App will be uninterrupted or error-free.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            Applicable law may not allow the exclusion of implied warranties, so the above exclusion may not apply to User.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit its officers, employees, representatives, agents, attorneys, or directors on no occasion will be held liable for and indirect, consequential, incidental, or punitive damages in the event not limited to loss in profits or loss of data. Whatever the reason resulting in any claim may be, such as but not limited to personal injury, negligence, breach of contract, whether or not we were advised of the possibility of such damages at any time.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit takes no responsibility of action or lack thereof on the part of User's contacts, nor foreseen or unforeseen consequences resulting from initiated contacts. hs.credit takes no responsibility for the proper functioning of any networks or servers, or any communications that occur over such networks and servers. User Agrees that hs.credit shall have no liability to User or to any third party arising as a result of any networks or servers failing to perform in the manner intended, failure of the App services to properly operate with User network or servers or from any errors occurring on User networks or servers as a result of User use of the App. User Agrees to defend, indemnify and hold harmless hs.credit and its affiliates, officers, directors, employees and agents from and against any and all third party claims (and any and all resulting losses, damages, liabilities, costs and expenses) alleging that User use of hs.credit violates, infringes or misappropriates the rights of any third party or violates applicable law.
                        </div>
                        <div className='main-paragraph'>
                            To the fullest extent allowed by applicable law, User agrees that none of the hs.credit Parties will be liable to Users, their successors, agents, heirs or assigns, and or any other person or entity for general, special, incidental, consequential, indirect, exemplary or punitive damages of any kind, including, but not limited to, those damages resulting from loss of use, data, sales, goodwill, or profits, failure to meet any duty (including good faith or reasonable care) whether or not hs.credit Parties has been advised of the possibility, or under any legal or equitable theory of liability, including theories of tort, contract, or otherwise arising out of the use of the App or the termination of User's use of the App.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit has no liability for any procedure and or action that a responder, the police, or other third party or other nominated party carry out when the App is activated by User to call a resource, such as the police.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit does not accept any responsibility or liability for User safety, including but not limited to: negligence or failure to act in a safe manner or follow emergency advice or protocol, personal injury, death or other consequences suffered by User or any third parties. hs.credit  services is provided on an "as is" basis and is not liable for any loss, damage, errors or omissions in connection with User use of the App. User understands and agrees that hs.credit is not liable for User's safety. User is solely responsible for taking appropriate safety precautions.
                        </div>
                        <div className='main-paragraph'>
                            If medical emergency notification services are provided, User agrees that the very nature of such services, regardless of any delay, involves uncertainty, risk and possible serious injury, disability or death, for which User will not attempt to hold hs.credit responsible or liable whatsoever. The Parties agree that the App is not designed or guaranteed to prevent any loss or injury.
                        </div>
                        <div className='main-paragraph'>
                            If the User activates a communication for any reason, User shall:
                        </div>
                        <div className='main-paragraph'>
                            <ol className='main-ordered-list'>
                                <li style={{ listStyleType: "lower-roman", display: "list-item" }}>
                                    pay, without reimbursement from hs.credit, any and all associated costs and expenses however incurred. If User fails to provide access to a responder to a communication, responder(s) may use forcible means to enter the Premises, which may result in damage to the Premises, all of which damage, cost and expense shall be borne solely by User without recourse to hs.credit or representatives.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph'>
                            hs.credit has no control over response times for responders. User hereby release hs.credit and the representatives for and from all claims, losses and damages that may arise from any forced entry or any delayed response by responders.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit neither represents nor warrants that any service will prevent any loss, damage or injury to person or property, will function at a desired time, or provide any personal protection in any circumstance. User acknowledges that hs.credit is not an insurer, and that User assumes all risk for loss or injury to User's property or person.  hs.credit has made no representation or warranties, and hereby disclaims any warranty of merchantability or fitness for any particular use.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER ACKNOWLEDGES THAT THE APP SERVICES ARE NOT A GUARANTEE OF SAFETY AGAINST PERSONAL HARM OR PREVENTION OF LOSS, LIABILITY, INJURY AND DAMAGE OF WHATSOEVER NATURE AND HOWSOEVER ARISING.
                        </div>
                        <div className='main-paragraph font-bold'>
                            HS.CREDIT SHALL NOT BE LIABLE TO USER FOR ANY DAMAGE, LOSS, LIABILITY OR INJURY OF WHATSOEVER NATURE AND HOWSOEVER ARISING THAT MAY RESULT FROM ANY FORCE MAJEURE OR CASUS FORTUITOUS INCLUDING BUT NOT LIMITED TO UNFORESEEABLE INTERRUPTIONS IN TELEPHONE, COMMUNICATIONS, INTERNET OR RADIO LINKS.
                        </div>
                        <div className='main-paragraph'>
                            User waives the right to trial by jury in any suit, action or other legal proceeding in connection with this Agreement. This jury trial waiver cannot be revoked.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit  takes no responsibility for the proper functioning of any networks or servers, or any communications that occur over such networks and servers. hs.credit makes no representations or warranties as to the interoperability of the App with any network or servers. User acknowledge that hs.credit shall have no liability to User or to any third party arising as a result of any networks or servers failing to perform in the manner intended, failure of the App to properly operate with User's network or servers or from any errors occurring on User's networks or servers as a result of its use of the App.
                        </div>
                        <div className='main-paragraph font-bold'>
                            NO SUIT OR ACTION SHALL BE BROUGHT AGAINST HS.CREDIT MORE THAN ONE (1) YEAR AFTER THE DATE OF THE INCIDENT THAT RESULTED IN THE LOSS, INJURY OR DAMAGE, OR THE SHORTEST DURATION PERMITTED UNDER APPLICABLE LAW IF GREATER THAN ONE (1) YEAR.
                        </div>
                        <div className='main-paragraph font-bold'>
                            BENEFIT TO OTHERS. THE PROVISIONS OF THESE TERMS AND CONDITIONS SHALL APPLY TO AND BENEFIT HS.CREDIT AND ITS AGENTS, EMPLOYEES, CONTRACTORS, SUBSIDIARIES, DEALERS, AFFILIATES, PARENTS (BOTH DIRECT AND INDIRECT), AFFINITY MARKETERS AND OTHER PARTNERS.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit is neither responsible nor liable for any viruses or other contamination of User's system nor for any delays, inaccuracies, errors or omissions arising out of its use of the App with respect to the material delivered by the App.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER ACKNOWLEDGES AND AGREES THAT THE INFORMATION, SOFTWARE, APPLICATIONS, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE APP MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS AND THAT HS.CREDIT SHALL HAVE NO LIABILITY FOR SUCH ERRORS. INFORMATION USER MAY RECEIVE VIA THE APP MAY NOT BE RELIED UPON BY USER FOR PERSONAL, SECURITY, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND USER SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO USER'S SITUATION.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER UNDERSTANDS AND AGREES THAT ANY MATERIAL OR INFORMATION DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE APP IS DONE AT USER'S OWN RISK AND THAT USER WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE ARISING FROM DOING SO. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY USER FROM HS.CREDIT OR THROUGH THE APP WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE IN THESE TERMS AND CONDITIONS.
                        </div>
                        <div className='main-paragraph font-bold'>
                            USER ACKNOWLEDGES AND AGREES THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, IN NO EVENT WILL HS.CREDIT OR ITS AFFILIATES, INCLUDING, WITHOUT LIMITATION, THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SUCCESSORS AND ASSIGNS, BE LIABLE TO USER OR ANY OTHER PARTY FOR ANY DIRECT OR INDIRECT LOSS, DAMAGE, COST, EXPENSE OR LIABILITY OF ANY KIND ("LOSS") ARISING IN ANY WAY OUT OF OR IN CONNECTION WITH THE AVAILABILITY, USE, ACCURACY, RELIANCE ON, OR INABILITY TO USE THE APP, INCLUDING (WITHOUT LIMITATION):
                        </div>
                        <div className='main-paragraph font-bold'>
                            <ol className='main-ordered-list'>
                                <li style={{ listStyleType: "lower-roman", display: "list-item" }}>
                                    ANY INDIRECT, SPECIAL, EXEMPLARY, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL LOSS; OR
                                </li>
                                <li style={{ listStyleType: "lower-roman", display: "list-item" }}>
                                    ANY LOSS ATTRIBUTABLE TO ERRORS, OMISSIONS, OR OTHER INACCURACIES IN THE APP OR IN THE INFORMATION PRESENTED BY THE APP.
                                </li>
                            </ol>
                        </div>
                        <div className='main-paragraph font-bold'>
                            THE EXCLUSION OF LIABILITY IN THIS SECTION APPLIES EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS.
                        </div>
                        <div className='main-paragraph font-bold'>
                            BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PARTICULAR KINDS OF LOSS, IN SUCH STATES OR JURISDICTIONS, HS.CREDIT'S LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW (THEREBY MINIMIZING HS.CREDIT'S LIABILITY TO USER TO THE LOWEST AMOUNT THAT APPLICABLE LAW PERMITS).
                        </div>
                        <div className='main-paragraph font-bold'>
                            UNDER NO CIRCUMSTANCES WILL USER ATTEMPT TO HOLD HS.CREDIT LIABLE FOR ANY CONSEQUENTIAL OR INCIDENTAL DAMAGES, INCLUDING WITHOUT LIMITATION, DAMAGES FOR PERSONAL INJURY OR DAMAGES TO PROPERTY. IF, NOTWITHSTANDING THE PROVISIONS OF THIS PARAGRAPH HS.CREDIT IS FOUND LIABLE FOR LOSS, DAMAGE OR INJURY UNDER ANY LEGAL THEORY RELATING IN ANY WAY TO THE APP OR SERVICES PROVIDED BY HS.CREDIT.
                        </div>
                        <div className='main-subtitle underline'>
                            Liquidated Damages.
                        </div>
                        <div className='main-paragraph font-bold'>
                            HS.CREDIT'S LIABILITY TO USER SHALL BE LIMITED TO ANY PAYMENTS MADE BY USER TO HS.CREDIT OR $500, WHICHEVER IS GREATER. THIS AGREED-UPON AMOUNT IS NOT A PENALTY.  RATHER, IT IS USER'S SOLE REMEDY ALTERNATIVELY TO TERMINATION OF SERVICE ALONE. THE PROVISIONS OF THIS PARAGRAPH APPLY NO MATTER HOW THE LOSS, DAMAGE, INJURY OR OTHER CONSEQUENCE OCCURS, EVEN IF DUE TO THE PERFORMANCE OR NONPERFORMANCE BY HS.CREDIT OF ITS OBLIGATIONS UNDER THIS CONTRACT OR FROM NEGLIGENCE (ACTIVE OR OTHERWISE), STRICT LIABILITY, VIOLATION OF ANY APPLICABLE CONSUMER PROTECTION LAW OR ANY OTHER THEORY OF LIABILITY OR ALLEGED FAULT ON THE PART OF HS.CREDIT, ITS AGENTS OR ITS EMPLOYEES.
                        </div>
                        <div className='main-paragraph font-bold'>
                            IF USER IS DISSATISFIED WITH ANY PORTION OF THE APP, OR WITH ANY OF THESE TERMS AND CONDITIONS, USER SOLE AND EXCLUSIVE REMEDY, UNLESS LIQUIDATED DAMAGES ABOVE ARE LAWFULLY AWARDED, IS TO DISCONTINUE USING THE APP.
                        </div>
                        <div className='main-subtitle underline'>
                            Force Majeure.
                        </div>
                        <div className='main-paragraph'>
                            User understands that the technical processing, functioning and transmission of the App may involve (i) transmissions over various networks; and (ii) changes to content to conform and adapt to technical requirements of connecting networks or devices. hs.credit assumes no responsibility for the deletion or failure to store content or other information. hs.credit accepts no responsibility or liability for any interruption or delay of any service. No liability for Phone Lines or Other Connectivity. Due to the potential for service interruption or outages on phone lines, internet service or mobile phone systems or other communication systems, none of which are within the control of hs.credit, User's connection to the App is not guaranteed. Users who use cable or Voice over Internet Protocol (VOIP) for their service are subject to additional consistency and reliability issues. hs.credit is not responsible for, and shall have no liability with respect to, service interruption, outages, or failure of customer's telephone service.
                        </div>
                        <div className='main-paragraph'>
                            To the extent hs.credit may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of hs.credit’s liability will be the minimum permitted under such law. Some jurisdictions may not allow the exclusion of implied warranties, so some of the above exclusions may not apply to User. Check the local laws for any restrictions or limitations regarding the exclusion of implied warranties.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit shall not have any liability to User as a result of delay or failure to perform obligations under this Contract as a result of reasons beyond hs.credit's reasonable control including but not being limited to acts of God, war, riot, flood, earthquake, actual or threatened terrorism, power failures, equipment failure, communications interruptions, fire, labor disputes, subcontractor or supplier delays or failures, strikes, utility failures, civil commotion, malicious damage, explosion, governmental actions, financial constraints and any other similar events.
                        </div>
                        <div className='main-paragraph'>
                            Nothing in this Contract shall exclude or limit any statutory rights which User has as a consumer; or our liability for death or personal injury due to our negligence.
                        </div>
                        <div className='main-subtitle underline'>
                            Choice Of Law.
                        </div>
                        <div className='main-paragraph'>
                            User agrees that these Terms and Conditions are governed by the laws of the United States of America and the laws of the State of New York. User Agrees that exclusive jurisdiction for any claim or dispute with hs.credit or relating in any way to its use of the App resides in the courts of the County of New York, State of New York, and User further agrees and expressly consents to the exercise of personal jurisdiction in the courts of the County of New York, State of New York, in connection with any such dispute and including any claim involving hs.credit or its affiliates, subsidiaries, employees, contractors, officers, directors, trustees, telecommunication providers and content providers. Use of the App is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms and Conditions, including without limitation this section.
                        </div>
                        <div className='main-subtitle underline'>
                            Termination.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit reserves the right to terminate this Agreement at any time for any reason without notice. The User may terminate this Agreement at any time without notice to hs.credit by discontinuing use of the App. hs.credit reserves the right, in its sole discretion, to terminate User access to the App or any portion thereof at any time, without notice. hs.credit's obligation to provide Services shall terminate automatically as of the date the App is disabled and or uninstalled by Use on a User device or equipment.
                        </div>
                        <div className='main-paragraph'>
                            This Agreement is for an indefinite period of time and may be terminated by either party for any reason or no reason at all. hs.credit reserves the right to suspend access to the App at any time for any reason.
                        </div>
                        <div className='main-paragraph'>
                            If User no longer accepts these Terms and Conditions, or any future modification to these Terms and Conditions, User must cease using the App. Continued use of the App indicates User's continued acceptance of these Terms and Conditions.
                        </div>
                        <div className='main-paragraph'>
                            If, for any reason, hs.credit believes that User has not complied with these Terms and Conditions, it may, at its sole discretion, cancel User's access and or use of the App immediately and without prior notice. hs.credit may at any time discontinue, suspend, or change any aspect of the App without informing User beforehand.
                        </div>
                        <div className='main-paragraph'>
                            hs.credit shall have no liability to User and or any third party resulting from hs.credit's termination of the App or this Contract. User acknowledges that in the event of termination of this Contract, hs.credit has no further duty to User.
                        </div>
                        <div className='main-paragraph'>
                            HS.CREDIT'S RESPONSIBILITY AND OBLIGATIONS TO USER CEASE IMMEDIATELY WHEN THIS AGREEMENT IS TERMINATED OR THE SERVICES ARE SUSPENDED AN OR CANCELED OR THE APP IS DISCONTINUED. THE PROVISIONS OF THIS CLAUSE DO NOT IN ANY WAY DEROGATE FROM THE EXEMPTIONS FROM LIABILITY CONTAINED ELSEWHERE IN THIS AGREEMENT.
                        </div>
                        <div className='main-subtitle underline'>
                            Severability.
                        </div>
                        <div className='main-paragraph'>
                            If any provision of this Contract is unenforceable, it shall not affect the enforceability of the remaining provisions of this Contract.
                        </div>
                        <div className='main-paragraph'>
                            If for any reason a court of competent jurisdiction finds any provision of these Terms and Conditions, or any portion thereof, to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to affect the intent of these Terms and Conditions, and the remainder of these Terms and Conditions shall continue in full force and effect.
                        </div>
                        <div className='main-paragraph'>
                            User agrees that this consent is severable from this Agreement and shall apply even in the event of termination of the Agreement.
                        </div>
                        <div className='main-paragraph'>
                            Following termination of these Terms and Conditions, limitations on hs.credit's liability and indemnification by User shall survive termination and continue to apply.
                        </div>
                        <div className='main-paragraph'>
                            Headings and Format of Agreement.
                        </div>
                        <div className='main-paragraph'>
                            The headings and paragraph titles used herein are solely for convenience of the parties only and shall not be considered in construing the provisions of this Contract. In this Contract, the word "including" is not a word of limitation but means "including, without limitation or example."
                        </div>
                        <div className='main-subtitle underline'>
                            Access And Use.
                        </div>
                        <div className='main-paragraph'>
                            User understands and accepts these Terms and Conditions herein without limitation or qualification. User expressly agrees to and accepts these Terms and Conditions herein. Additionally, by any use of the App User continues to agree and continues to be bound by these Terms and Conditions.
                        </div>
                    </div>
                    <div className='close-btn'>
                        <button className='bg-hspurple shadow-none hover:shadow-hspurple rounded-2xl max-w-none min-w-fit w-64 h-12 text-white font-bold' onClick={() => hideDetail()}>I've read and agree to the terms</button>
                    </div>
                </div>
            </ReactModal>

        </span>
    );
}
