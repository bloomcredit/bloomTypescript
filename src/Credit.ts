import { Http } from "./Http";
import {omit as _omit} from 'lodash';

export class Credit {
  constructor(
    private http: Http
  ) { }

  getCreditData(token: string, orderId: string) {
    const body = {
      query: "query FullOrderReport($ORDER_ID: uuid!, $order_id: String!) { credit_data_order: credit_data_order_by_pk(order_id: $ORDER_ID) { order_date order_id order_sku_id bankruptcies { current_disposition current_disposition_date date_filed date_reported disposition_date id industry_id order_id industry { category id name } } collections { account { account_number creditor { industry { category id name } address bureau email id industry_id name phone website } creditor_id date_closed date_opened id name type type_description } account_id credit_data_id current_balance custumer_number disputed id industry_code original_amount } consumer_id credit_scores { credit_data_id id model score_reasons { id narrative score_id } value } inquiries { credit_data_id date id industry_id inquirer_name industry { category id name } } mla_statuses { id order_id referral_contact_number regulated_identifier exist covered_borrower_status } ofac_statuses { reference order_id issue_source id exist } tradelines { account { account_number creditor { industry { category id name } address bureau email id industry_id name phone website } creditor_id date_closed date_opened id name type type_description } account_id account_rating credit_data_id credit_limit current_balance date_effective delinquency_date delinquency_earliest high_credit is_active late_30_days_total late_60_days_total late_90_days_total max_delinquency months_reviewed_count most_recent_payment_amount most_recent_payment_date past_due payment_pattern_start_date scheduled_monthly_payment payment_snapshots { id occurrence_date payment_status tradeline_id } } } tradeline_attributes: get_tradeline_attributes_by_order_id(args: {id: $order_id}) { total_tradelines open_tradelines tradeline_open_last_3_months tradeline_open_last_6_months tradeline_open_last_9_months tradeline_open_last_12_months months_oldest_tradeline_opened months_recent_tradeline_opened total_payment_obligation_open_tradelines months_recent_delinquency total_outstanding_balance_open_tradelines order_id } revolving_attributes: get_revolving_attributes_by_order_id(args: {id: $order_id}) { active_revolving_open_ended_tradelines_balance_opened_last_12_m active_revolving_open_ended_tradelines_balance_opened_last_24_m average_revolving_open_ended_tradeline_balance maximum_bank_card_utilization months_oldest_revolving_tradeline_opened months_recent_revolving_tradeline_opened months_recent_tradeline_revolving_delinquency open_revolving_tradelines revolving_rate revolving_tradelines_opened_last_6_months total_outstanding_balance_open_revolving_tradelines total_revolving_tradelines order_id } mortgage_attributes: get_mortgage_attributes_by_order_id(args: {id: $order_id}) { active_mortgage_tradelines_balance months_oldest_mortgage_tradeline_opened months_recent_mortgage_tradeline_delinquency months_recent_mortgage_tradeline_opened mortgage_tradelines_opened_last_6_months open_mortgage_tradelines outstanding_balance_open_mortgage_tradeline total_monthly_payment_obligation_for_open_mortgage_tradelines total_mortgage_tradelines order_id } auto_attributes: get_auto_attributes_by_order_id(args: {id: $order_id}) { auto_tradelines_opened_last_6_months months_oldest_auto_tradeline_opened months_recent_auto_tradeline_delinquency months_recent_auto_tradeline_opened open_autotradelines outstanding_balance_open_auto_tradeline total_auto_tradelines total_monthly_payment_obligation_for_open_auto_tradelines order_id } unsecured_installment_attributes: get_unsecured_installment_attributes_by_order_id(args: {id: $order_id}) { active_installment_tradelines active_installment_tradelines_opened_last_3_months months_oldest_unsecured_installment_tradelines_opened months_recent_unsecured_installment_tradeline_delinquency months_recent_unsecured_installment_tradelines_opened open_unsecured_installment_tradelines outstanding_balance_open_unsecured_installment_tradelines total_monthly_payment_obligation_for_open_unsecured_installment total_unsecured_installment_tradelines unsecured_installment_tradelines_opened_6_months order_id } student_loans_attributes: get_student_loans_attributes_by_order_id(args: {id: $order_id}) { months_oldest_student_loan_tradelines_opened months_recent_student_loan_tradelines_delinquency months_recent_student_loan_tradelines_opened open_student_loan_tradelines outstanding_balance_open_student_loan_tradelines student_loan_monthly_payment student_loan_tradelines_opened_last_6_months student_loans_deferment total_student_loan_tradelines order_id } delinquency_attributes: get_delinquency_attributes_by_order_id(args: {id: $order_id}) { tradelines_currently_dq30 tradelines_currently_dq60 order_id } specialized_attributes: get_specialized_attributes_by_order_id(args: {id: $order_id}) { bankruptcies foreclosures inquiries_last_6_months inquiries_on_file months_recent_bankruptcy months_recent_public_record months_recent_third_party_collection mortgage_trade_highest_high_credit non_medical_collections non_mortgage_non_inquiries_last_6_months percent_high_revolving_trade_utilization percent_opened_trades_last_24_months percent_satisfactory_trades_last_24_months tradeline_dti tradeline_ndi order_id } worst_attributes: get_worst_attributes_by_order_id(args: {id: $order_id}) { worst_rating_all_auto_tradelines_last_12_months worst_rating_all_mortgage_tradelines_last_12_months worst_rating_all_revolving_tradelines_last_12_months worst_rating_all_student_loan_tradelines_last_12_months worst_rating_all_unsecured_tradelines_last_12_months worst_rating_all_tradelines_last_12_months order_id } }",
      variables: { ORDER_ID: `${orderId}`, order_id: `${orderId}` }
    }

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    const data = {
      "auto_attributes": [
        {
          "auto_tradelines_opened_last_6_months": "string",
          "months_oldest_auto_tradeline_opened": "string",
          "months_recent_auto_tradeline_delinquency": "string",
          "months_recent_auto_tradeline_opened": "string",
          "open_autotradelines": "string",
          "order_id": "string",
          "outstanding_balance_open_auto_tradeline": "string",
          "total_auto_tradelines": "string",
          "total_monthly_payment_obligation_for_open_auto_tradelines": "string"
        }
      ],
      "credit_data_order": {
        "bankruptcies": [
          {
            "current_disposition": "string",
            "current_disposition_date": "string",
            "date_filed": "string",
            "date_reported": "string",
            "disposition_date": "string",
            "id": "string",
            "industry": {
              "category": "string",
              "id": "string",
              "name": "string"
            },
            "industry_id": "string",
            "order_id": "string"
          }
        ],
        "collections": [
          {
            "account": {
              "account_number": "string",
              "creditor": {
                "address": "string",
                "bureau": "string",
                "email": "string",
                "id": "string",
                "industry": {
                  "category": "string",
                  "id": "string",
                  "name": "string"
                },
                "industry_id": "string",
                "name": "string",
                "phone": "string",
                "website": "string"
              },
              "creditor_id": "string",
              "date_closed": "string",
              "date_opened": "string",
              "id": "string",
              "name": "string",
              "type": "string",
              "type_description": "string"
            },
            "account_id": "string",
            "credit_data_id": "string",
            "current_balance": 0,
            "custumer_number": "string",
            "disputed": true,
            "id": "string",
            "industry_code": "string",
            "original_amount": 0
          }
        ],
        "consumer_id": "string",
        "credit_scores": [
          {
            "credit_data_id": "string",
            "id": "string",
            "model": "FICO10",
            "score_reasons": [
              {
                "id": "string",
                "narrative": "string",
                "score_id": "string"
              }
            ],
            "value": "571"
          }
        ],
        "inquiries": [
          {
            "credit_data_id": "string",
            "date": "string",
            "id": "string",
            "industry": {
              "category": "string",
              "id": "string",
              "name": "string"
            },
            "industry_id": "string",
            "inquirer_name": "string"
          }
        ],
        "mla_statuses": [
          {
            "covered_borrower_status": "string",
            "exist": true,
            "id": "string",
            "order_id": "string",
            "referral_contact_number": "string",
            "regulated_identifier": "string"
          }
        ],
        "ofac_statuses": [
          {
            "exist": true,
            "id": "string",
            "issue_source": "string",
            "order_id": "string",
            "reference": "string"
          }
        ],
        "order_date": "string",
        "order_id": "string",
        "order_sku_id": "string",
        "tradelines": [
          {
            "account": {
              "account_number": "string",
              "creditor": {
                "address": "string",
                "bureau": "string",
                "email": "string",
                "id": "string",
                "industry": {
                  "category": "string",
                  "id": "string",
                  "name": "string"
                },
                "industry_id": "string",
                "name": "string",
                "phone": "string",
                "website": "string"
              },
              "creditor_id": "string",
              "date_closed": "string",
              "date_opened": "string",
              "id": "string",
              "name": "string",
              "type": "string",
              "type_description": "string"
            },
            "account_id": "string",
            "account_rating": "string",
            "credit_data_id": "string",
            "credit_limit": 0,
            "current_balance": 0,
            "date_effective": "string",
            "delinquency_date": "string",
            "delinquency_earliest": true,
            "high_credit": 0,
            "is_active": true,
            "late_30_days_total": 0,
            "late_60_days_total": 0,
            "late_90_days_total": 0,
            "max_delinquency": 0,
            "months_reviewed_count": 0,
            "most_recent_payment_amount": 0,
            "most_recent_payment_date": "string",
            "past_due": 0,
            "payment_pattern_start_date": "string",
            "payment_snapshots": [
              {
                "id": "string",
                "occurrence_date": "string",
                "payment_status": "string",
                "tradeline_id": "string"
              }
            ],
            "scheduled_monthly_payment": 0
          }
        ]
      },
      "delinquency_attributes": [
        {
          "order_id": "string",
          "tradelines_currently_dq30": "string",
          "tradelines_currently_dq60": "string"
        }
      ],
      "mortgage_attributes": [
        {
          "active_mortgage_tradelines_balance": "string",
          "months_oldest_mortgage_tradeline_opened": "string",
          "months_recent_mortgage_tradeline_delinquency": "string",
          "months_recent_mortgage_tradeline_opened": "string",
          "mortgage_tradelines_opened_last_6_months": "string",
          "open_mortgage_tradelines": "string",
          "order_id": "string",
          "outstanding_balance_open_mortgage_tradeline": "string",
          "total_monthly_payment_obligation_for_open_mortgage_tradelines": "string",
          "total_mortgage_tradelines": "string"
        }
      ],
      "revolving_attributes": [
        {
          "active_revolving_open_ended_tradelines_balance_opened_last_12_m": "string",
          "active_revolving_open_ended_tradelines_balance_opened_last_24_m": "string",
          "average_revolving_open_ended_tradeline_balance": "string",
          "maximum_bank_card_utilization": "string",
          "months_oldest_revolving_tradeline_opened": "string",
          "months_recent_revolving_tradeline_opened": "string",
          "months_recent_tradeline_revolving_delinquency": "string",
          "open_revolving_tradelines": "string",
          "order_id": "string",
          "revolving_rate": "string",
          "revolving_tradelines_opened_last_6_months": "string",
          "total_outstanding_balance_open_revolving_tradelines": "string",
          "total_revolving_tradelines": "string"
        }
      ],
      "specialized_attributes": [
        {
          "bankruptcies": "string",
          "foreclosures": "string",
          "inquiries_last_6_months": "string",
          "inquiries_on_file": "string",
          "months_recent_bankruptcy": "string",
          "months_recent_public_record": "string",
          "months_recent_third_party_collection": "string",
          "mortgage_trade_highest_high_credit": "string",
          "non_medical_collections": "string",
          "non_mortgage_non_inquiries_last_6_months": "string",
          "order_id": "string",
          "percent_high_revolving_trade_utilization": "string",
          "percent_opened_trades_last_24_months": "string",
          "percent_satisfactory_trades_last_24_months": "string",
          "tradeline_dti": "string",
          "tradeline_ndi": "string"
        }
      ],
      "student_loans_attributes": [
        {
          "months_oldest_student_loan_tradelines_opened": "string",
          "months_recent_student_loan_tradelines_delinquency": "string",
          "months_recent_student_loan_tradelines_opened": "string",
          "open_student_loan_tradelines": "string",
          "order_id": "string",
          "outstanding_balance_open_student_loan_tradelines": "string",
          "student_loan_monthly_payment": "string",
          "student_loan_tradelines_opened_last_6_months": "string",
          "student_loans_deferment": "string",
          "total_student_loan_tradelines": "string"
        }
      ],
      "tradeline_attributes": [
        {
          "months_oldest_tradeline_opened": "string",
          "months_recent_delinquency": "string",
          "months_recent_tradeline_opened": "string",
          "open_tradelines": "string",
          "order_id": "string",
          "total_outstanding_balance_open_tradelines": "string",
          "total_payment_obligation_open_tradelines": "string",
          "total_tradelines": "string",
          "tradeline_open_last_12_months": "string",
          "tradeline_open_last_3_months": "string",
          "tradeline_open_last_6_months": "string",
          "tradeline_open_last_9_months": "string"
        }
      ],
      "unsecured_installment_attributes": [
        {
          "active_installment_tradelines": "string",
          "active_installment_tradelines_opened_last_3_months": "string",
          "months_oldest_unsecured_installment_tradelines_opened": "string",
          "months_recent_unsecured_installment_tradeline_delinquency": "string",
          "months_recent_unsecured_installment_tradelines_opened": "string",
          "open_unsecured_installment_tradelines": "string",
          "order_id": "string",
          "outstanding_balance_open_unsecured_installment_tradelines": "string",
          "total_monthly_payment_obligation_for_open_unsecured_installment": "string",
          "total_unsecured_installment_tradelines": "string",
          "unsecured_installment_tradelines_opened_6_months": "string"
        }
      ],
      "worst_attributes": {
        "order_id": "string",
        "worst_rating_all_auto_tradelines_last_12_months": "string",
        "worst_rating_all_mortgage_tradelines_last_12_months": "string",
        "worst_rating_all_revolving_tradelines_last_12_months": "string",
        "worst_rating_all_student_loan_tradelines_last_12_months": "string",
        "worst_rating_all_tradelines_last_12_months": "string",
        "worst_rating_all_unsecured_tradelines_last_12_months": "string"
      }
    };
    return this.parseAllContent(data);
    // return this.http.request(
    //   'GET',
    //   `/v2/data-access/orders/${orderId}/full-report`,
    //   body,
    //   headers
    // ).then((response: any) => {
    //   return this.parseAllContent(response.data);
    // });
  }

  orderCredit(token: string, consumer_id: string, portfolio_id: string, sku: string) {
    const attributes = {
      consumer_id,
      portfolio_id,
      sku
    }

    const body = {
      data: {
        type: 'order',
        attributes
      }
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    this.http.request(
      '/v2/data-access/orders',
      'POST',
      body,
      headers
    ).then((response: any) => response.data)
  }

  getDecision(credit_data: any) {
    const credit_score_exists = credit_data.hasOwnProperty('credit_scores')
    const months_recent_delinquency_exists = credit_data.hasOwnProperty('attributes') && credit_data['attributes'].hasOwnProperty('months_recent_delinquency')

    if (!credit_score_exists || !months_recent_delinquency_exists) {
      throw new Error('Insufficient data provided. Missing `credit_data["credit_scores"]` and/or `credit_data["attributes"]`.')
    }

    const approved = (credit_data['credit_scores'].reduce((score: number, current: any) => Math.min(score, current.value)) >= 600) &&
      (credit_data['attributes']['months_recent_delinquency'] >= 24) &&
      (!credit_data['attributes']['tradeline_dti'] || credit_data['attributes']['tradeline_dti'] <= 35)

    const denied = (credit_data['credit_scores'].reduce((score: number, current: any) => Math.min(score, current.value)) < 600) &&
      (credit_data['attributes']['months_recent_delinquency'] < 24) &&
      (!credit_data['attributes']['tradeline_dti'] || credit_data['attributes']['tradeline_dti'] < 35)

    if (credit_data['ofac_statuses']['reference'] != "") {
      return `unable to process; ${credit_data['ofac_statuses']['issue_source']}`;
    } else if (approved) {
      return "decision: approved";
    } else if (denied) {
      return "decision: denied";
    } else {
      return "decision: manual review required";
    }
  }

  parseCreditScores(credit_scores: { model: string; value: number; id: string; credit_data_id: string; score_reasons: { id: string; reason_description: string }[] }[]) {
    return credit_scores.map(data => {
      return data.score_reasons.map(reason => ({
        model: data.model,
        value: data.value,
        id: data.id,
        credit_data_id: data.credit_data_id,
        score_id: reason.id,
        reason_description: reason.reason_description
      }));
    });
  }

  parseCreditDataOrder(credit_data_order: { order_date: string; order_id: string; order_sku_id: string; consumer_id: string }) {
    return {
      order_date: credit_data_order['order_date'],
      order_id: credit_data_order['order_id'],
      order_sku_id: credit_data_order['order_sku_id'],
      consumer_id: credit_data_order['consumer_id']
    };
  }

  parseAllContent(report: Record<string, any>) {
    // Parse all attributes
    const attributes = Object.values(_omit(report, 'credit_data_order'))
      .filter(row => row['order_id']);

      // Credit_data_order
    const credit_data_order = report["credit_data_order"];

    const credit_data = this.parseCreditDataOrder(credit_data_order);
    const credit_scores = this.parseCreditScores(credit_data_order["credit_scores"]);
    const mla_statuses = credit_data_order["mla_statuses"];
    const ofac_statuses = credit_data_order["ofac_statuses"];
    const tradelines = credit_data_order["tradelines"];

    return {
      attributes,
      credit_data,
      credit_scores,
      mla_statuses,
      ofac_statuses,
      tradelines
    };
  }
}