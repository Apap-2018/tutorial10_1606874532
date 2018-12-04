import React from 'react';
//nama pasien, jumlah tagihan, tanggal tagihan


export const FormBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Billing Pasien</h2>
            
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Jumlah Billing</label>
                <input type="number" className="form-control" name="jumlahTagihan"/>    
            </div>
            <div className="form-group">
                <label>Tanggal Billing</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalRujukan ? "" : props.pasien.tanggalRujukan}/>
            </div>

            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <button className="btn btn-success" value="submit">Add Billing</button>
        </form>
    )
}