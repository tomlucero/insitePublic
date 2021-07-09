$(document).ready(function(){ //Function creation by Clayton Dewey

    $('#do').html([ //Decals Only created by SRL 10/20/20

        '<div class="alert alert-success">',
        '<h4>Decals Ship for $2!</h4>',
        '<p>This item qualifies for our <strong>Decals Only</strong> shipping rate. If you are only ordering decals, select <strong>Decals Only</strong> at checkout as your shipping option. Your          decal(s) ship for $2 + $1 each additional decal (max. $8.00) via <strong>un-trackable USPS First Class Mail</strong>.</p>',
        '<p>Expedited and trackable options are available for an additional charge. Please email <strong><a                                                             href="mailto:bookstoreorders@colostate.edu">bookstoreorders@colostate.edu</a></strong> for rates.</p>',
        '</div>'

    ].join('\n'));

    $('#erp').html([ //Electronics Return Policy created by SRL 10/20/20

        '<div class="alert alert-info">',
        '<h4>CSU Bookstore Electronics Return Policy</h4>',
        '<p>A full refund will be granted on calculators/electronics with all the following guidelines:</p>',
        '<ul>',
        '<li>With a cash register/online purchase receipt within 10 days of purchase</li>',
        '<li>Must be in re-sellable condition: in original un-opened package including all enclosed materials, such as ownerâ€™s manuals and accessories.</li>',
        '</ul>',
        '<p>Defective calculators/electronics may be exchanged for the exact same model within 90 days of purchase with cash register/online purchase receipt.</p>',
        '</div>'

    ].join('\n'));

    $('#sa').html([ //Charge it to Student Account created by SRL 10/20/20

        '<div class="alert alert-success">',
        'You can charge this item to your student account! <a href="http://www.bookstore.colostate.edu/bill" target="_blank">Click here</a> to learn more about charging textbooks, supplies, and other eligible items to your student account.',
        '</div>'

    ].join('\n'));

     $('#ds').html([ //Drop Shipment Items created by SRL 10/21/20

        '<div class="alert alert-info">',
        '<h4>Drop Shipped Item</h4>',
        '<p>This item will ship direct from the vendor. Expedited shipping options may be unavailable. This item will ship separately if other items are ordered from CSU Bookstore.</p>',
        ' </div>'

    ].join('\n'));

    $('#oaisp').html([ //Only Available for In-Store Pickup created by SRL 10/21/20

        '<div class="alert alert-danger">',
        '<strong>In-Store Pick-Up Online</strong> Due to the size and shipping requirements of this item, we are only able to offer in-store pick-up of this item.',
        '</div>'

    ].join('\n'));

    $('#oaispm').html([ //Only Available for In-Store Pickup Medicine created by SRL 10/21/20

        '<div class="alert alert-warning">',
        '<strong>In-Store Pick-Up Online</strong>  This item is available for purchase in-store only. Please come to the CSU Bookstore where we will be happy to help you locate this item for purchase.',
        '</div>'

    ].join('\n'));

    $('#dropShip').html([ //Drop Ship Item added by Tom Lucero on 7/2/21

            '<div class="alert alert-success">',
              '<a href="/drop-ship"><img src="/SiteImages/109-SchoolImages/109-dropshipped-100x100-png.png"></a>',
                '<h4 class="media-heading">Drop Shipped Item - Please Read Important Information for This Item!</h4>',
                  '<ul>',
                    '<li>We can not offer our in-store pickup, international, or expedited shipping options for this item. This item is deliverable to the continental United States only.</li>',
                      '<ul><li><em>Regrettably, we are unable to ship yard signs to Alaska, Hawaii, PO Boxes or APO/FPO destinations.</em></li></ul>',
                    '<li>If you are purchasing any other items, such as CSU Rams Gear or CSU Gifts, this item will ship separately.</li>',
                    '<li>This item ships directly from the vendor facility to your home. Please allow 7-14 business days for delivery. <strong>Expedited shipping is not available for this item.</strong></li>',
                    '<li><strong>Drop-ship orders are non-returnable/non-refundable/non-cancellable once we submit the order to the vendor.</strong></li>',
                    '<li>For more information on our Drop Ship products, please visit our Drop-Ship info page at <a href="/drop-ship">bookstore.colostate.edu/drop-ship.</a></li>',
                  '</ul>',
                  '</div>',
                  '</div>',
                  '</div>'

        ].join('\n'));


})
