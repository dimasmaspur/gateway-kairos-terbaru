require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var edoRouter = require('./routes/edo');
var consigneeRouter = require('./routes/consignee');
var port_of_ladingRouter = require('./routes/port_of_lading');
var port_of_dischargeRouter = require('./routes/port_of_discharge');
var final_destinationRouter = require('./routes/final_destination');
var houseBlRouter = require('./routes/house_bl_number');
var ocean_vesselRouter = require('./routes/ocean_vessel');
var voyage_numberRouter = require('./routes/voyage_number');
var consignee_nameRouter = require('./routes/consignee_name');
var paidRouter = require('./routes/paid');
var unpaidRouter = require('./routes/unpaid');
var loginRouter = require('./routes/auth');
var dataPartner = require('./routes/data_partner');
var dataCost = require('./routes/data_cost');
var dataPort = require('./routes/data_port');
var dataBranch = require('./routes/data_branch');
var joRouter = require('./routes/job_order');
var joDataRouter = require('./routes/jo_data');
var joPayrequest = require('./routes/jo_payrequest');
var joPayrequestCost = require('./routes/jo_payrequest_cost');
var joDebitnote = require('./routes/jo_debitnote');
var joDebitnoteCost = require('./routes/jo_debitnote_cost');
var joCreditnote = require('./routes/jo_creditnote');
var joCreditnoteCost = require('./routes/jo_creditnote_cost');
var jocRouter = require('./routes/job_consol');
var jocRebateIncome = require('./routes/joc_rebateincome');
var jocDataRouter = require('./routes/joc_data');
var jocRebateIncomeCost = require('./routes/joc_rebateincome_cost');
var jocRebateExpense = require('./routes/joc_rebateexpense');
var jocRebateExpenseCost = require('./routes/joc_rebateexpense_cost');
var jocPayrequest = require('./routes/joc_payrequest');
var jocPayrequestCost = require('./routes/joc_payrequest_cost');
var joInvoiceRouter = require('./routes/jo_invoice');
var joInvoiceCostRouter = require('./routes/jo_invoice_cost');
var quotationRouter = require('./routes/quotation');
var quotationInvoiceRouter = require('./routes/quotation-invoice');
var quotationpayrequestRouter = require('./routes/quotation-payrequest');


const verifyToken = require("./middlewares/verifyToken");
const can = require("./middlewares/permission");

var app = express();
const cors = require("cors");
app.use(cors("*"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// edo
app.use('/', loginRouter);
app.use('/api/e_do', verifyToken, edoRouter);
app.use('/api/e_do/users', usersRouter);
app.use('/api/e_do/consignee', consigneeRouter);
app.use('/api/e_do/port_of_lading', port_of_ladingRouter);
app.use('/api/e_do/port_of_discharge', port_of_dischargeRouter);
app.use('/api/e_do/final_destination', final_destinationRouter);
app.use('/api/e_do/house_bl_number', houseBlRouter);
app.use('/api/e_do/ocean_vessel', ocean_vesselRouter);
app.use('/api/e_do/voyage_number', voyage_numberRouter);
app.use('/api/e_do/consignee_name', consignee_nameRouter);
app.use('/api/e_do/paid', paidRouter);
app.use('/api/e_do/unpaid', unpaidRouter);


// kairos
app.use('/data-partner', verifyToken, can("admin","marketing"), dataPartner);
app.use('/data-cost', verifyToken, can("admin"), dataCost);
app.use('/data-port', verifyToken, can("admin","marketing"), dataPort);
app.use('/data-branch', verifyToken, can("admin"), dataBranch);
app.use('/job-order', verifyToken, can("admin"), joRouter);
app.use('/jo-data', verifyToken, can("admin"), joDataRouter);
app.use('/jo-invoice', verifyToken, can("admin"), joInvoiceRouter);
app.use('/invoice-cost', verifyToken, can("admin"), joInvoiceCostRouter);
app.use('/jo-payrequest', verifyToken, can("admin"), joPayrequest);
app.use('/payrequest-cost', verifyToken, can("admin"), joPayrequestCost);
app.use('/jo-debitnote', verifyToken, can("admin"), joDebitnote);
app.use('/debitnote-cost', verifyToken, can("admin"), joDebitnoteCost);
app.use('/jo-creditnote', verifyToken, can("admin"), joCreditnote);
app.use('/creditnote-cost', verifyToken, can("admin"), joCreditnoteCost);
app.use('/job-consol', verifyToken, can("admin"), jocRouter);
app.use('/joc-data', verifyToken, can("admin"), jocDataRouter);
app.use('/joc-rebate-income', verifyToken, can("admin"), jocRebateIncome);
app.use('/rebate-income-cost', verifyToken, can("admin"), jocRebateIncomeCost);
app.use('/joc-rebate-expense', verifyToken, can("admin"), jocRebateExpense);
app.use('/rebate-expense-cost', verifyToken, can("admin"), jocRebateExpenseCost);
app.use('/joc-payrequest', verifyToken, can("admin"), jocPayrequest);
app.use('/joc-payrequest-cost', verifyToken, can("admin"), jocPayrequestCost);
app.use('/quotation', verifyToken, can("admin","marketing"), quotationRouter);
app.use('/quotation-invoice', verifyToken, can("admin","marketing"), quotationInvoiceRouter);
app.use('/quotation-payrequest', verifyToken, can("admin","marketing"), quotationpayrequestRouter);


module.exports = app;
