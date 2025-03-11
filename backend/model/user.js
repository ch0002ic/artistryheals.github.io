'use strict';
const { supabase } = require('../util/db');
const userTable = 'user';

module.exports = {

    async getUserAccount(name) {
        const { data, error } = await supabase
            .from(userTable)
            .select('id, name')
            .eq('name', name)

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

}