#!/usr/bin/env node

const commander = require('commander');
const chalk = require('chalk');
const Tables = require('tty-table');

commander
    .version('1.0.0')
    .usage('<option> [input]')
    .option('-i, --info', 'About')
    .option('-w, --what', 'What is GST')
    .option('-W, --why', 'Why GST is implemented')
    .option('-e, --explain [value]', 'Explains the GST related keywords')
    .option('-t, --type', 'Types of GST')
    .option('-h, --history', 'History Of GST implementation in India')
    .option('-b, --benefits', 'Benefits of GST')
    .parse(process.argv);

if(commander.info){
    console.log(chalk.blue('This tool is about the GST implementation in India.'));
    console.log(chalk.blue('It explains what exactly is GST, reason to implement GST, benefits, types, history, etc etc.'));
    console.log(chalk.blue('\nThis information is mainly collected from Clear Tax which is an online platform to efile ' +
    'IT Returns in India.\nFor more information, visit ' + chalk.bold(chalk.underline('https://cleartax.in/s/gst-law-goods-and-services-tax'))));
}
if(commander.what){
    console.log(chalk.blue(chalk.bold('Goods & Services Tax') + ' is a ' + chalk.bold('comprehensive') + 
    ', ' + chalk.bold('multi-stage') + ', ' + chalk.bold('destination-based') + 
    ' tax that will be levied on every ' + chalk.bold('value addition') + '.'));
    console.log(chalk.blue('It will deal with the issues related to Indirect Taxes.'));
    console.log(chalk.blue('\nNote: more info on the bold words is provided with ' + chalk.bold('--explain') +' option.'));
    console.log(chalk.blue('\n\nFor more information, visit ' + chalk.bold(chalk.underline('https://cleartax.in/s/gst-law-goods-and-services-tax'))));
}
if(commander.why){
    console.log(chalk.blue('There was an urgent need to reform Indian Tax System which comprises of Direct and Indirect Taxes. ' + 
    '\nThere were many issues related to Indirect Taxes like cascading effect of tax, tax evasion , no inclusion of ' + 
    'unorganised sector etc etc. \nThere were many hurdles for businesses to operate with this part of tax system which affected India\'s ' + 
    'image as a business friendly country.\nDue to casacading effect the tax liability used to be transferred to end consumer.'));
    console.log(chalk.blue('\nGST solves many problems related to Indirect Taxes.'));
    console.log(chalk.blue('For more information, visit '+ chalk.bold(chalk.underline('https://cleartax.in/s/gst-law-goods-and-services-tax'))));
}
if(commander.explain){
    if(commander.explain == true){
        console.log(chalk.blue('Please provide a term after ' + chalk.bold('--explain') + ' or ' + chalk.bold('-e') + ' option.'));
        return;
    }
    switch(commander.explain.toUpperCase()){
        case 'IGST': console.log(chalk.blue('Integrated GST: When goods or services are supplied from one state to another,' + 
                        ' IGST will be collected by Central Government.'));
                     break;
        case 'SGST': console.log(chalk.blue('State GST: When goods or services are supplied within a particular state, '+ 
                        'GST will be collected as SGST and CGST where SGST is collected by State and CGST is collected '+
                        ' by Centre.'));
                     break;
        case 'CGST': console.log(chalk.blue('Central GST: When goods or services are supplied within a particular state, '+ 
                        'GST will be collected as SGST and CGST where SGST is collected by State and CGST is collected '+
                        ' by Centre.'));
                     break;
        case 'DESTINATION-BASED': console.log(chalk.blue(chalk.bold('Goods and Services Tax') + ' will be levied on all transactions happening '+
                        'during the entire manufacturing chain. \nEarlier, when a product was manufactured, the centre '+
                        'would levy an Excise Duty on the manufacture, and then the state will add a VAT tax when the '+
                        'item is sold to the next stage in the cycle. \nThen there would be a VAT at the next point of '+
                        'sale.'));
                        console.log(chalk.blue('\nNow, Goods and Services Tax will be levied at every point of sale. \nAssume that '+
                        'the entire manufacture process is happening in Rajasthan and the final point of sale is in '+
                        'Karnataka. \nSince Goods & Services Tax is levied at the point of consumption, so the state '+
                        'of Rajasthan will get revenue in the manufacturing and warehousing stages, but lose out on '+
                        'the revenue when the product moves out Rajasthan and reaches the end consumer in Karnataka. \n\n'+
                        'This means that Karnataka will earn that revenue on the final sale, because it is a '+
                        'destination-based tax and this revenue will be collected at the final point of '+
                        'sale/destination which is Karnataka.'));
                                 break;
        case 'MULTI-STAGE': console.log(chalk.blue('There are multiple steps an item goes through from manufacture or production to '+
                        'the final sale. \nBuying of raw materials is the first stage. \nThe second stage is production or '+
                        'manufacture. \nThen, there is the warehousing of materials. \nNext, comes the sale of the product to '+
                        'the retailer. \nAnd in the final stage, the retailer sells you – the end consumer – the product, '+
                        'completing its life cycle.'));
                        console.log(chalk.blue('\n'+chalk.bold('Goods and Services Tax')+' will be levied on each of these stages, '+
                        'which makes it a multi-stage tax.'));
                        break;
        case 'VALUE ADDITION': console.log(chalk.blue('When you put some work in a good(product) and making it more useful, it\'s basically '+
                        'some addition in the value of the good.'));
                        console.log(chalk.blue('\nLet us assume that a manufacturer wants to make a shirt. For this he must buy yarn.'+
                        '\nThis gets turned into a shirt after manufacture. So, the value of the yarn is increased when it '+
                        'gets woven into a shirt. \nThen, the manufacturer sells it to the warehousing agent who attaches labels'+
                        ' and tags to each shirt. That is another addition of value after which the warehouse sells it to the '+
                        'retailer who packages each shirt separately and invests in marketing of the shirt thus increasing '+
                        'its value.'));
                        console.log(chalk.blue('GST will be levied on these value additions – the monetary worth added at each stage'+
                        ' to achieve the final sale to the end customer.'));
                        break;
        default: console.log(chalk.blue('sorry don\'t know what ' + chalk.bold(commander.explain) + ' is.'));
                 break;
    }
}
if(commander.type){
    console.log(chalk.blue('There are 3 types of GST:'));
    console.log(chalk.blue('1. ' + chalk.bold('CGST: Central GST') + ' - this tax will be collected by Central Government.'));
    console.log(chalk.blue('2. ' + chalk.bold('SGST: State GST') + ' - this tax will be collected by State Government for' + 
                            'intra-state sales.'));
    console.log(chalk.blue('3. ' + chalk.bold('IGST: Integrated GST') + ' - this tax will be collected by Central Government for' + 
                            'inter-state sales.'));
    console.log(chalk.blue('In most cases, the tax structure under the new regime will be as follows:'));

    let headers = [
        {
            value: 'Transaction',
            headerColor: 'blue'
        },
        {
            value: 'GST',
            headerColor: 'blue'
        },
        {
            value: 'Old taxes',
            headerColor: 'blue'
        },
        {
            value: 'Comments',
            headerColor: 'blue'
        }
    ];

    let rows = [
        ['Sale within the state', 'CGST + SGST', 
        'VAT + Central Excise/Service tax', 'Revenue will now be shared between the Centre and the State'],
        ['Sale to another State', 'IGST', 
        'Central Sales Tax + Excise/Service Tax', 
        'There will only be one type of tax (central) now in case of inter-state sales.']
    ];

    let table = Tables(headers, rows, {});
    console.log(chalk.blue(table.render()));
    console.log(chalk.blue('\nFor more information, visit ' + chalk.underline(chalk.bold('https://cleartax.in/s/what-is-sgst-cgst-igst'))));
}
if(commander.history){
    console.log(chalk.blue('In India, the discussion on GST Law was flagged off in the year 2000,'+
    ' when the then Prime Minister Atal Bihari Vajpayee brought the issue to the table. '));
    console.log(chalk.blue(chalk.bold('History of GST in India – Year by Year Events')));
    let headers = [
        {
            value: 'year',
            color: ''
        },
        {
            value: 'comments',
            color: '',
            width: 50
        }
    ];    
    let rows = [
        ['2000', 'PM Vajpayee sets up committee to draft GST law & set up backend tech and logistics for GST'],
        ['2004', 'A task force concludes, GST must be implemented to improve current tax structure'],
        ['2006', 'Finance Minister proposes GST introduction from 1st April 2010'],
        ['2007', 'Empowered committee of State Finance Ministers forms Joint Working Group'],
        ['2007', 'CST to be phased out - rates reduced from 4% to 3%'],
        ['2008', 'EC finalises dual GST structure, to have separate levy, legislation'],
        ['2010', 'Project to computerise commercial taxes launched but GST implementation postponed'],
        ['2011', 'Constitution Amendment Bill to enable GST Law introduced'],
        ['2012', 'Parliamentary Standing Committee begins discussion on GST but stalled it over clause 2798'],
        ['2013', 'Standing Committee tables its report on GST'],
        ['2014', 'GST Bill reintroduced in Parliament by Finance Minister'],
        ['2015', 'GST Bill passed in Lok Sabha. Petroleum to be excluded from GST'],
        ['2015', 'GST Bill doesn\'t pass in Rajya Sabha'],
        ['2016', 'Amended Model GST Law passed in both Houses. President gives assent'],
        ['2016', 'GSTN goes live'],
        ['2017', 'Four supplementary GST Bits passed in Lok Sabha and approved by Cabinet'],
        ['2017', 'Rajya Sabha passes 4 supplementary GST Bills. Final GST to be implemented on 1st July 2017']
    ];

    let table = Tables(headers, rows, {});
    console.log(chalk.blue(table.render()));
}
if(commander.benefits){
    console.log(chalk.blue('There are many benefits of GST. Few are mentioned below: '));
    console.log(chalk.blue('\n1. This brings the whole nation under one tax system.'));
    console.log(chalk.blue('2. The '+chalk.bold('cascading effect of tax') + ' goes away, which actually benefits the end '+
                'consumer as the taxes at different stages of manufacturing minimizes.'));
    console.log(chalk.blue('3. GST removes most of the bad side effects of ' + chalk.bold('Indirect Tax') + ' from Indian Tax System.'+
                ' This help businesses and bring more transparency in Indian Tax System, which will eventually help in '+
                chalk.bold('ease of doing business') + ' ranking of India.'));
    console.log(chalk.blue('4. Economists suggest that this will increase the GDP growth rate of India.'));
    console.log(chalk.blue('5. Helps in stopping tax evasion.'));
    console.log(chalk.blue('6. Helps in regulating the unorganized sector.'));
    console.log(chalk.blue('\nFor more information, visit ' + chalk.underline(chalk.bold('https://cleartax.in/s/benefits-gst'))));
}