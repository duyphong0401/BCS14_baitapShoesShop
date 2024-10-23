import React from 'react'

const ShoesDetail = (props) => {
    let {shoesObj} = props

  return (
    <>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Mô tả</th>
                                        <th scope="col">Đơn giá</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{shoesObj.id}</td>
                                        <td>{shoesObj.name}</td>
                                        <td><img style={{ width: "50px" }} src={shoesObj.image} alt="" /></td>
                                        <td>{shoesObj.quantity}</td>
                                        <td> {shoesObj.description}</td>
                                        <td>${shoesObj.price}</td>

                                    </tr>
                                  
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}

export default ShoesDetail
